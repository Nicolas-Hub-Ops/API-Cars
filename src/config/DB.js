import mongoose from "mongoose";

const connectionDB = async () => {
    mongoose.connect(process.env.MONGO_URL)
    return mongoose.connection;
}

export default connectionDB;