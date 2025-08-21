import express from 'express';
import dotenv from 'dotenv';
import { connetDB } from './db/connectDB.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;


app.get("/", (req,res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    connetDB()
    console.log(`🚀 Server is running on port ${port}`);
});
