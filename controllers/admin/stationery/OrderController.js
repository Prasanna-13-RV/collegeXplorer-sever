const StationeryOrder = require("../../../modals/stationery/stationeryOrder")

// Create a new order
const createStationeryOrder = async (req, res) => {
	try {
		const { user, items } = req.body
		const newOrder = new StationeryOrder({
			user: user,
			items: items.map((order) => ({
				product: order.product,
				quantity: order.quantity,
			})),
		})

		const savedOrder = await newOrder.save()
		// console.log("Order created:", savedOrder)
		res.json(savedOrder)
	} catch (error) {
		console.error("Error creating order:", error)
		res.status(500).json({ error: "Internal Server Error" })
	}
}

// Read all orders
const getAllStationeryOrders = async (req, res) => {
	try {
		const orders = await StationeryOrder.find()
			.populate("user")
			.populate("items.product")
		// console.log("All orders:", orders)
		res.json(orders)
	} catch (error) {
		console.error("Error retrieving orders:", error)
	}
}

// Update an order by ID
const updateStationeryOrder = async (req, res) => {
	try {
		const { user, items } = req.body
		const id = req.params.id
		const updatedOrder = await StationeryOrder.findByIdAndUpdate(
			id,
			{
				user: user,
				items: items.map((order) => ({
					product: order.product,
					quantity: order.quantity,
				})),
			},
			{ new: true }
		)

		// console.log("Updated order:", updatedOrder)
		res.json(updatedOrder)
	} catch (error) {
		console.error("Error updating order:", error)
	}
}

// Delete an order by ID
const deleteStationeryOrder = async (req, res) => {
	try {
		const id = req.params.id
		const deletedOrder = await StationeryOrder.findByIdAndDelete(id)
		// console.log("Deleted order:", deletedOrder)
		res.json(deletedOrder)
	} catch (error) {
		console.error("Error deleting order:", error)
	}
}

module.exports = {
	createStationeryOrder,
	getAllStationeryOrders,
	updateStationeryOrder,
	deleteStationeryOrder,
}
