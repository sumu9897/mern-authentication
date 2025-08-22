import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT || 5000;


app.get("/", (req,res) => {
    res.send("Hello World")
})

app.use("/api/auth", authRoutes)

app.listen(port, () => {
    connectDB()
    console.log(`🚀 Server is running on port ${port}`);
});
