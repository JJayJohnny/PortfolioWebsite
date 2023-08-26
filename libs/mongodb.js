import mongoose from "mongoose"

const connectMogoDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Connected to MongoDB")
    }
    catch(error){
        console.log(error)
    }
}

export default connectMogoDB