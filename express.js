import express from 'express';
import ViteExpress from 'vite-express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const CONNECTION_STRING = process.env.CONNECTION_STRING;
const DATABASE = process.env.DATABASE_NAME;
const PORT = process.env.PORT || 3000;

const server = express();
const client = new MongoClient(CONNECTION_STRING);
const database = client.db(DATABASE);

server.use(express.json());



server.get('/api/posts/latest', async (_, response) => {
    const LIMIT = 10;

    const posts = database.collection('posts').find().sort({ _id: -1 }).limit(LIMIT);

    response.json(await posts.toArray());
})

server.get('/api/posts/:id', async (request, response) => {
    const { id } = request.params;
    const post = await database.collection('posts').findOne({ _id: new ObjectId(id) });
    response.json(post);
})


server.post('/api/posts', (request, response) => {
    const post = request.body;
    database.collection('posts').insertOne(post);
})


server.put('/api/posts/:id', async (request, response) => {
    const { id } = request.params;
    const post = request.body;

    database.collection('posts').updateOne({ _id: new ObjectId(id) }, { $set: post });
})

server.delete('/api/posts/:id', async (request, response) => {
    const { id } = request.params;
    database.collection('posts').deleteOne({ _id: new ObjectId(id) });
})


ViteExpress.listen(server, PORT, () => console.log(`Server running on http://localhost:${PORT})`));