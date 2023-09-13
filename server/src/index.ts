import dotenv from "dotenv";
dotenv.config();
import express, {Request,Response} from "express";
const app = express();
const port = process.env.PORT || 5000 ;
import cors from "cors";
import DBconnection from "./db/connection";
import Contact from "./modals/contact";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req:Request,res:Response)=>{
    res.send("hello")
})

app.get("/contact",(req:Request,res:Response)=>{
    res.send("contact details")
})

app.post("/contact",async(req:Request,res:Response)=>{
    try {
        const {name,email,mobileno,message} = req.body;
        const contactData = new Contact({
            name,email,mobileno,message
        });
        const data = await contactData.save();
        res.status(201).send({
            success:true,
            message:"successfully get data in contact",
            data:data
        })
    } catch (error) {
       res.status(401).send({
        success:false,
        message:"error getting in contact api",
        error:error
       }) 
    }
});

app.listen(port,()=>{
    DBconnection();
    console.log(`port running on ${port}`)
})