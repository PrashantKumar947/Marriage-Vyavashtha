import mongoose from "mongoose"

const dbConnection = async () =>{
    try{
        await mongoose.connect("mongodb+srv://palprashant947:WWCRfY5qInZND57k@cluster0.nuwqmnp.mongodb.net/userLogin");
        console.log("mongodb connected");
    }catch{
        console.log("some error occured during connection");
    }
}

export default dbConnection