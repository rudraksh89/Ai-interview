import mongoose from "mongoose";

const connectDb = async ()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected !");
  } catch(error){
    console.log(`Database Connection ${error}`);
  }
}

export default connectDb;