import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import chatRouter from './routes/chat'
import getCollectionQdrantRouter from './routes/getCollectionQdrant'
import initCollectionQdrantRouter from './routes/initCollection'
import insertVectorQdrantRouter from './routes/insertQdranVectorRoute'
import askRagRouter from './routes/askRagRoute'
import azureBlobRouter from './routes/azureStorageRouter'
import azureSasRouter from './routes/azureSasRouter'
import documentLocalRoute from './routes/documentLocalRouter'
import { setupSwagger } from './config/swagger';
import path from 'path';

const app = express();
app.use('/public', express.static(path.join(__dirname, '..','public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
setupSwagger(app)

app.use('/chat', chatRouter)
app.use('/get-collection', getCollectionQdrantRouter);
app.use('/init-collection', initCollectionQdrantRouter);
app.use('/insert-vector-qdrant', insertVectorQdrantRouter);
app.use('/ask-rag', askRagRouter)
app.use('/azure-storage', azureBlobRouter);
app.use('/generate-url', azureSasRouter);
app.use('/upload-document', documentLocalRoute)


app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT || '3000');

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
