const mongoose = require("mongoose")

const stationeryOrderSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	items: [
		{
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "StationeryProduct",
				required: true,
			},
			quantity: { type: Number, default: 1 },
		},
	],
	isOrderComplete: { type: Boolean, default: true },
})

const StationeryOrder = mongoose.model("StationeryOrder", stationeryOrderSchema)

module.exports = StationeryOrder
