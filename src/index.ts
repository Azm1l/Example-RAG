import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import chatRouter from './routes/chat'
import insertVectorRouter from './routes/insertText'
import queryVectorRouter from './routes/queryVector'
const app = express();
app.use(express.json());

app.use('/chat', chatRouter)
app.use('/insert-vector', insertVectorRouter)
app.use('/query-vector', queryVectorRouter)

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
