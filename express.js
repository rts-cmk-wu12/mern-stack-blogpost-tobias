import express from 'express';
import ViteExpress from 'vite-express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const CONNECTION_STRING = process.env.CONNECTION_STRING;
const DATABASE_NAME = process.env.DATABASE_NAME;

const client = new MongoClient(CONNECTION_STRING);
const database = client.db(DATABASE_NAME);

getPosts(server, database)

const server = express();


ViteExpress.listen(server, 3000, () => console.log('Server running on http://localhost:3000)'));