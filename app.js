const express =require("express");
const app=express() ;
const mongoose = require("mongoose");
const ejs =require("ejs");
const path= require("path");

const Listing = require("./models/listing");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
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

app.get("/" , (req ,res)=>{
    res.send("hiii !i am route");
}); 

// index route : this will show all the listings 
app.get("/listings" ,async(req ,res)=>{
     const allListings = await Listing.find({});
        res.render("listings/index.ejs" , {allListings});
        // console.log(allListings);
    })
;
// new route : this will show the form to create a new listing
app.get("/listings/new" , (req ,res)=>{
    res.render("listings/new.ejs");
});
// show route : this will show details of one listing
app.get("/listings/:id" , async(req ,res)=>{
    const {id} = req.params ;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs" , {listing});

});

// create route : this will create a new listing in the database
app.post("/listings" , async(req ,res)=>{
    // res.send(req.body);
    
});


// new route : this will show the form to create a new listing

// app.get("/testlisting" , async(req ,res) =>{
//     let sampleListing =new Listing ({
//         title : "My new villa" ,
//         description: "by the Beach",
//         price:1200 ,
//         location : "goa",
//         country :"india"
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("succesfully connected");
// });


app.listen(8080, () => {
    console.log("Server is running on port 8080");
});