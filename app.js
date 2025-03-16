import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import youtubeRoute from "./route/youtube.js"
import connectToDB from './DB/db.js';

dotenv.config({});

connectToDB();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/youtube", youtubeRoute);

app.listen(PORT, ()=>{
    console.log(`Port is running on ${PORT}`)
})


