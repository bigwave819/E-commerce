import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("successfully connected to the database :)");
    } catch (error) {
        console.error(`ERROR: ${Error.message}`);
        process.exit(1)
    }
}


export default connectDB;