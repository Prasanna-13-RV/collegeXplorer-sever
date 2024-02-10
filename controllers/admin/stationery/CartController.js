const StationeryCart = require("../../../modals/stationery/stationeryCart")

// Create a new cart
const createStationeryCart = async (req, res) => {
	try {
		const { user, items } = req.body
		const newCart = new StationeryCart({
			user: user,
			items: items.map((item) => ({
				product: item.productId,
				quantity: item.quantity,
			})),
		})

		const savedCart = await newCart.save()
		// console.log("Cart created:", savedCart)
		res.json(savedCart)
	} catch (error) {
		console.error("Error creating cart:", error)
		throw error
	}
}

// Read all carts
const getAllStationeryCarts = async (req, res) => {
	try {
		const carts = await StationeryCart.find()
			.populate("user")
			.populate("items.product")
		// console.log("All carts:", carts)
		res.json(carts)
	} catch (error) {
		console.error("Error retrieving carts:", error)
	}
}

// Update a cart by ID
const updateStationeryCart = async (req, res) => {
	try {
		const id = req.params.id
		const { user, items } = req.body
		const updatedCart = await StationeryCart.findByIdAndUpdate(
			id,
			{
				user: user,
				items: items.map((item) => ({
					product: item.productId,
					quantity: item.quantity,
				})),
			},
			{ new: true }
		)

		console.log("Updated cart:", updatedCart)
		res.json(updatedCart)
	} catch (error) {
		console.error("Error updating cart:", error)
		throw error
	}
}

// Delete a cart by ID
const deleteStationeryCart = async (req, res) => {
	try {
		const id = req.params.id
		const deletedCart = await StationeryCart.findByIdAndDelete(id)
		// console.log("Deleted cart:", deletedCart)
		res.json(deletedCart)
	} catch (error) {
		console.error("Error deleting cart:", error)
		throw error
	}
}

module.exports = {
	createStationeryCart,
	getAllStationeryCarts,
	updateStationeryCart,
	deleteStationeryCart,
}
