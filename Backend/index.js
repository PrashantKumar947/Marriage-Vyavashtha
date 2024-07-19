
import express from "express"
import dbConnection from "./db.js";

const app = express();

const port = 8000;

app.listen(port, (req,res)=>{
    console.log(`app is listening on Port ${port}`);

})

app.get("/", (req,res)=>{
    res.send("this is home");
})

app.get("/", (req,res)=>{
    res.send("welcome to the user's page");
});
app.get("/user/shivam", (req,res)=>{
    res.send("welcome to the home of shivam");
});