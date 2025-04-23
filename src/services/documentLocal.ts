import PDFParser from 'pdf-parse'

export async function processPdf(file: Express.Multer.File) {
    const data = await PDFParser(file.buffer)
    return data.text
}