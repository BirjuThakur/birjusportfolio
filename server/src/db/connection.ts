import mongoose from "mongoose";

const URI:any = process.env.DBCONNECT; 
const DBconnection = () =>{
mongoose.connect(URI).then(()=>console.log("connection successfully"))
.catch(()=>console.log("connection dismiss"))
}

export default DBconnection;