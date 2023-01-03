// Node
import http from 'node:http';

// PathNode
import path from 'node:path';

// Express
import express from 'express';

// Mongoose
import mongoose from 'mongoose';

// Routes
import { router } from './router';

// Cors
import { cors } from './app/middlewares/cors';

// SokcetIO
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect('mongodb://localhost:27017')
  .then(() => {

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(cors);
    app.use(router);

    server.listen(3001, () => console.log('✨ Server started at http://localhost:3001'));
  })
  .catch(() => console.log('Server not found'));
