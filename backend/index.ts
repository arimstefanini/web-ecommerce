import express from "express";
import { connect } from 'mongoose';
import dotenv from "dotenv";
import userRoute from "./src/routes/user";
import authRoute from "./src/routes/auth";

const app = express();
dotenv.config();

connect(process.env.MONGO_URL as string)
 .then(()=>console.log("DBConnection Successfull!"))
 .catch((err)=>{
   console.log(err)
  });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () =>{
  console.log("Backend server is running!")
})

