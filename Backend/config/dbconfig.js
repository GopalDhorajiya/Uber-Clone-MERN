import mongoose from 'mongoose';
import {DATABASE_URL} from './serverconfig.js ';
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${DATABASE_URL}`);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
