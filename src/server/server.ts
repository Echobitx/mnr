import express from "express";
import os from "node:os";
import config from "./config";

//import config, {PORT} from "./config";

//import config from "./config";



const server = express()

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/", (req,res) => {
    res.render("index",{
        content: "EJS is <em>pretty</em> cool",
    });
});

server.listen(config.PORT,config.HOST, ()=>{
    console.info(
        `Express server is listening at ${config.SERVER_URL}`,
        `Free Mem : ${os.freemem()/1024/1024}`,
    ); 
});