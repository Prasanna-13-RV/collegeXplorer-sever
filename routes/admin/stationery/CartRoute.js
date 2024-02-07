const {
	createStationeryCart,
	getAllStationeryCarts,
	updateStationeryCart,
	deleteStationeryCart,
} = require("../../../controllers/admin/stationery/CartController")

const router = require("express").Router()

// Create a new cart
router.post("/cart/insert", createStationeryCart)

// Read all carts
router.get("/cart", getAllStationeryCarts)

// Update a cart by ID
router.put("/cart/update/:id", updateStationeryCart)

// Delete a cart by ID
router.delete("/cart/delete/:id", deleteStationeryCart)

module.exports = router
