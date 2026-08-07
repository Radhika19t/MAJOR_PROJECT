if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require("express");
const reviewRouter = require("./routes/review");
const listingRouter = require("./routes/listing");
const userRouter = require("./routes/user");
const { isLoggedIn, isOwner ,isReviewAuthor} = require("./middleware");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const Listing = require("./models/listing");
const Review = require("./models/review");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const multer = require("multer");
const { storage } = require("./cloudConfig/cloudConfig");
const upload = multer({ storage });

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL;
main().then(
    () => {
        console.log("connected to mongodb");
    }).catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });


async function main() {
    // await mongoose.connect(mongo_url);
    await mongoose.connect(dbUrl);

}

const sessionOptions = {
    // secret: "mysupersecretcode",

    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;   // <-- Add this line
    next();
});
app.use("/listings/:id/reviews", reviewRouter);
app.use("/listings", listingRouter);
app.use("/", userRouter);




// app.listen(8080, () => {
//     console.log("Server is running on port 8080");
// });
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});