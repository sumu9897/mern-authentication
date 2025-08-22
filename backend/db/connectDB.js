import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected: ${db.connection.host}`);
        
    } catch (error) {
        console.log("Error connection to MongoDB: " ,error.mongoose);
        process.exit(1)
        
    }
}