const mongoose =require( "mongoose");
const initData=require("./data.js");
const Listing = require("../models/listing");
const data = require("./data.js");

const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
main().then(
    ()=>{
        console.log("connected to mongodb");
    }).catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
    async function main() {
            await mongoose.connect(mongo_url);
            
    }
 
const initDb = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data initalise");
}

initDb();


