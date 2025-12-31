// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const listingSchema = new Schema({
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     image: {
//         type: String,
//         default: "https://www.bing.com/th/id/OIP.O9nIGE4tMlRXgNs7GmFFLgHaE8?w=242&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
//         set: (v) =>
//             v === "" ? "https://www.bing.com/th/id/OIP.O9nIGE4tMlRXgNs7GmFFLgHaE8?w=242&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" : v,
//     },
//     price: { type: Number, required: true },
//     location: { type: String, required: true },
//     country: { type: String, required: true }
// });


// const Listing = mongoose.model("Listing", listingSchema);


// module.exports = Listing;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: {
    type: {
      filename: { type: String, required: true },
      url: { type: String, required: true }
    },
    required: true
  },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  country: { type: String, required: true }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
