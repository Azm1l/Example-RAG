import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import chatRouter from './routes/chat'
import insertVectorRouter from './routes/insertText'
import queryVectorRouter from './routes/queryVector'
import getCollectionQdrantRouter from './routes/getCollectionQdrant'
import initCollectionQdrantRouter from './routes/initCollection'
import insertVectorQdrantRouter from './routes/insertQdranVector.route'
import askRagRouter from './routes/askRagRoute'
import azureBlobRouter from './routes/azureStorageRouter'
import azureSasRouter from './routes/azureSasRouter'
import documentLocalRoute from './routes/documentLocalRouter'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/chat', chatRouter)
app.use('/insert-vector', insertVectorRouter)
app.use('/query-vector', queryVectorRouter)
app.use('/get-collection', getCollectionQdrantRouter);
app.use('/init-collection', initCollectionQdrantRouter);
app.use('/insert-vector-qdrant', insertVectorQdrantRouter);
app.use('/ask-rag', askRagRouter)
app.use('/azure-storage', azureBlobRouter);
app.use('/generate-url', azureSasRouter);
app.use('/document-local', documentLocalRoute)


app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT || '3000');

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
