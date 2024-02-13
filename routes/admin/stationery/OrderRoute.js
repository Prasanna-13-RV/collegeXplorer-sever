const router = require("express").Router()

const {
	createStationeryOrder,
	getAllStationeryOrders,
	updateStationeryOrder,
	deleteStationeryOrder,
} = require("../../../controllers/admin/stationery/OrderController")

// Create a new order
router.post("/order/insert", createStationeryOrder)

// Read all orders
router.get("/order", getAllStationeryOrders)

// Update a order by ID
router.put("/order/update/:id", updateStationeryOrder)

// Delete a order by ID
router.delete("/order/delete/:id", deleteStationeryOrder)

module.exports = router
