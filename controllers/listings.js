const Listing = require("../models/listing");

// INDEX
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

// NEW
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

// SHOW
module.exports.showListing = async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findById(id)
        .populate("owner")
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        });

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });
};

// CREATE
// module.exports.createListing = async (req, res) => {
//     const newListing = new Listing(req.body.listing);

//     newListing.owner = req.user._id;

//     await newListing.save();

//     req.flash("success", "New Listing Created Successfully!");

//     res.redirect("/listings");
// };
module.exports.createListing = async (req, res) => {
    console.log("========== BODY ==========");
    console.dir(req.body, { depth: null });

    console.log("========== FILE ==========");
    console.dir(req.file, { depth: null });

    if (!req.body.listing) {
        return res.send("❌ req.body.listing is undefined");
    }

    if (!req.file) {
        return res.send("❌ req.file is undefined");
    }

    const newListing = new Listing(req.body.listing);

    newListing.owner = req.user._id;

    newListing.image = {
        url: req.file.path,
        filename: req.file.filename,
    };

    await newListing.save();

    req.flash("success", "Listing Created!");

    res.redirect("/listings");
};

// EDIT
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    res.render("listings/edit.ejs", { listing });
};

// UPDATE
module.exports.updateListing = async (req, res) => {
    const { id } = req.params;

    let listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { new: true }
    );

    // If user uploaded a new image
    if (req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename,
        };

        await listing.save();
    }

    req.flash("success", "Listing Updated Successfully!");

    res.redirect(`/listings/${id}`);
};

// DELETE
module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;

    await Listing.findByIdAndDelete(id);

    req.flash("success", "Listing Deleted Successfully!");

    res.redirect("/listings");
};
module.exports.searchListing = async (req, res) => {

    const query = req.query.q;

    let allListings;

    if (query) {
        allListings = await Listing.find({
            $or: [
                { title: { $regex: query, $options: "i" } },
                { location: { $regex: query, $options: "i" } },
                { country: { $regex: query, $options: "i" } }
            ]
        });
    } else {
        allListings = await Listing.find({});
    }

    res.render("listings/index.ejs", { allListings });
};