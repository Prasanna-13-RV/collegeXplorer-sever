const mongoose = require("mongoose")

const stationeryCartSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	items: [
		{
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "StationeryProduct",
			},
			quantity: { type: Number, default: 1 },
		},
	],
})

const StationeryCart = mongoose.model("StationeryCart", stationeryCartSchema)

module.exports = StationeryCart
