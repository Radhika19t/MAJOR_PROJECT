const express = require("express");
const router = express.Router();

const multer = require("multer");
const { storage } = require("../cloudConfig/cloudConfig"); // adjust path if needed
const upload = multer({ storage });

const listingController = require("../controllers/listings");
const { isLoggedIn, isOwner } = require("../middleware");

// INDEX
router.get("/", listingController.index);

// NEW
router.get("/new", isLoggedIn, listingController.renderNewForm);

// SHOW
router.get("/search", listingController.searchListing);
router.get("/:id", listingController.showListing);
router.post(
    "/",
    isLoggedIn,
    (req, res, next) => {
        console.log("POST /listings route reached");
        next();
    },
    upload.single("image"),
    listingController.createListing
);
// CREATE
router.post(
    "/",
    isLoggedIn,
    upload.single("image"),
    listingController.createListing
);

// EDIT
router.get("/:id/edit", isLoggedIn, isOwner, listingController.renderEditForm);

// UPDATE
// router.put("/:id", isLoggedIn, isOwner, listingController.updateListing);
router.put(
    "/:id",
    isLoggedIn,
    isOwner,
    upload.single("image"),
    listingController.updateListing
);
// DELETE
router.delete("/:id", isLoggedIn, isOwner, listingController.destroyListing);

module.exports = router;