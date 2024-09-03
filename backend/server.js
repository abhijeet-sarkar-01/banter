// Imports -----------------------------------------------------

import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from "path";  

import connectToMongo from './db/connect_mongo.js';

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import { app, server } from './socket/socket.js';

// --------------------------------------------------------------

dotenv.config();


const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// Middlewares --------------------------------------------------

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

// for any other route ------------------------------------------

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

// --------------------------------------------------------------

server.listen(PORT, () => {
  connectToMongo();
  console.log(`Server running on port ${PORT}`)
});