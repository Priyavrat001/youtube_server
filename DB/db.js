import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({});


const uri = process.env.MONGO_URI;

const connectToDB = ()=>{
    try {
        mongoose.connect(uri).then((c)=>console.log(`Mongodb is connected ${c.Collection.name}`))
    } catch (error) {
        console.error(error.message)
    }
};

export default connectToDB;