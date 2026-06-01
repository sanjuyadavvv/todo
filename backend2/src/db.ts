import mongoose from "mongoose";

const connectdb=async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL as string)
       console.log('monngo db connected ')
    } catch (error) {
        console.log('error connecting to mongoDb')

    }
}

export default connectdb