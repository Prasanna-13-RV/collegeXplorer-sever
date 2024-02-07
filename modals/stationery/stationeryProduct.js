const mongoose = require("mongoose")

const stationeryProductSchema = new mongoose.Schema({
	productName: { type: String, required: true },
	shopName: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Restaurant",
		required: true,
	},
	productDescription: { type: String },
	productImage: { type: String },
	productPrice: { type: Number, required: true },
	isProductAvailable: { type: Boolean, default: true },
})
const StationeryProduct = mongoose.model("StationeryProduct", stationeryProductSchema)

module.exports = StationeryProduct
