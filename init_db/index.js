const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");

// const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
require("dotenv").config();

const mongo_url = process.env.ATLASDB_URL;
async function main() {
    try {
        await mongoose.connect(mongo_url);
        console.log("✅ Connected to MongoDB");

        await initDb();

        await mongoose.connection.close();
        console.log("✅ Database connection closed");
    } catch (err) {
        console.error("❌ Error:", err);
    }
}

const initDb = async () => {
    // Delete existing listings
    await Listing.deleteMany({});

    // Insert new listings
    await Listing.insertMany(initData.data);

    console.log("✅ Database initialized successfully!");
};

main();