const StationeryShop = require("../../../modals/stationery/stationeryShop")

// Create a new shop
const createShop = async (req, res) => {
	try {
		const { name, description, loc, products, isOpened } = req.body
		const newShop = new StationeryShop({
			name: name,
			description: description,
			loc: loc,
			products: products,
			isOpened: isOpened,
		})
		const savedShop = await newShop.save()
		// console.log("Shop created:", savedShop)
		res.json(savedShop)
	} catch (error) {
		console.error("Error creating shop:", error)
	}
}

// Read all shops
const getAllShops = async (req, res) => {
	try {
		const shops = await StationeryShop.find().populate("products")
		// console.log("All shops:", shops)
		res.json(shops)
	} catch (error) {
		console.error("Error retrieving shops:", error)
	}
}

// Update a shop by ID
const updateShop = async (req, res) => {
	try {
		const { name, description, loc, products, isOpened } = req.body
		const id = req.params.id
		const updatedShop = await StationeryShop.findByIdAndUpdate(
			id,
			{
				name: name,
				description: description,
				loc: loc,
				products: products,
				isOpened: isOpened,
			},
			{ new: true }
		)
		// console.log("Updated shop:", updatedShop)
		res.json(updatedShop)
	} catch (error) {
		console.error("Error updating shop:", error)
	}
}

// Delete a shop by ID
const deleteShop = async (req, res) => {
	try {
		const id = req.params.id
		const deletedShop = await StationeryShop.findByIdAndDelete(id)
		// console.log("Deleted shop:", deletedShop)
		res.json(deletedShop)
	} catch (error) {
		console.error("Error deleting shop:", error)
	}
}

module.exports = {
	createShop,
	getAllShops,
	updateShop,
	deleteShop,
}
