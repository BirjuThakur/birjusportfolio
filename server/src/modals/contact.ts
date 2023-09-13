import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileno: {
        type: Number,
        required: true
    },
    message: {
        type: String
    },
},{timestamps:true});

//collection 
const Contact = mongoose.model("Contact", contactSchema);

export default Contact;