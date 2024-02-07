const mongoose = require("mongoose")

const stationeryShopSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	loc: { type: String }, 
	products: [{ type: mongoose.Schema.Types.ObjectId, ref: "StationeryProduct" }],
	isOpened: { type: Boolean, default: true },
})

const StationeryShop = mongoose.model("StationeryShop", stationeryShopSchema)

module.exports = StationeryShop
