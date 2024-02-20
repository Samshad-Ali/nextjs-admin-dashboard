import mongoose from "mongoose";

export default async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database connected...!')
    } catch (error) {
        console.log('Error occured ',error.message)
    }
}