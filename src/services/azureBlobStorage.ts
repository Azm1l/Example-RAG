import {
    BlobServiceClient,
    StorageSharedKeyCredential,
    BlobSASPermissions,
    generateBlobSASQueryParameters,
    SASProtocol
} from "@azure/storage-blob";
import path = require("path");

let accountName = process.env.AZURE_ACCOUNT_NAME;
let accountKey = process.env.AZURE_ACCOUNT_KEY;
let containerName = process.env.AZURE_BLOB_CONTAINER;

const credential = new StorageSharedKeyCredential(accountName, accountKey);

const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net`,
    credential)

const isValidContainerName = (name: string) => /^[a-z0-9-]+$/.test(name);

const generateBlobNameWithTimestamp = (originalName: string) => {
    const timestamp = new Date().toISOString().replace(/[-:.]/g, "").slice(0, 14);
    const ext = path.extname(originalName);
    const baseName = path.basename(originalName, ext);
    return `${baseName}_${timestamp}${ext}`;
};

export async function uploadToAzure(file: Express.Multer.File, blobName: string) {
    //if (!isValidContainerName(containerName)) {
    //    throw new Error("Invalid container name.");
    //}
    const containerClient = blobServiceClient.getContainerClient(containerName);
    await containerClient.createIfNotExists();

    const blobNameWithTimestamp = generateBlobNameWithTimestamp(blobName);
    const blobClient = containerClient.getBlockBlobClient(blobNameWithTimestamp);

    await blobClient.upload(file.buffer, file.buffer.length, {
        blobHTTPHeaders: { blobContentType: file.mimetype },
    });
    return { blobName: blobNameWithTimestamp };
}

export async function generateSasUrl(
    blobName: string,
    expiryTime: string
) {
    const expiryDate = new Date(expiryTime);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobClient = containerClient.getBlobClient(blobName);
    const sasToken = generateBlobSASQueryParameters(
        {
            containerName,
            blobName,
            permissions: BlobSASPermissions.parse("r"),
            protocol: SASProtocol.Https,
            startsOn: new Date(),
            expiresOn: expiryDate,
        },
        new StorageSharedKeyCredential(accountName, accountKey)
    ).toString();

    return `${blobClient.url}?${sasToken}`;
};

export async function deleteBlobFile (blobName: string) {
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobClient = containerClient.getBlobClient(blobName);
    await blobClient.deleteIfExists();
    return 'File deleted';

}