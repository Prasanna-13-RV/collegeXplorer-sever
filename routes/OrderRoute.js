const router = require("express").Router()

const {
	createOrder,
	getAllOrders,
	getAllOrdersForShop,
	updateOrder,
	deleteOrder,
} = require("../controllers/OrderController")

// Create a new order
router.post("/order/insert", createOrder)

// Read all orders
router.get("/order", getAllOrders)

// Read all orders for shop
router.get("/order/:shopId", getAllOrdersForShop)

// Update a order by ID
router.post("/order/update/:id", updateOrder)

// Delete a order by ID
router.delete("/order/delete/:id", deleteOrder)

module.exports = router
