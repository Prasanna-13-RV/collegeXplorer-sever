const router = require("express").Router()

const {
	createStationeryProduct,
	getAllStationeryProduct,
	updateStationeryProduct,
	deleteStationeryProduct,
} = require("../../../controllers/admin/stationery/ProductController")

// Create a new dish
router.post("/product/insert", createStationeryProduct)

// Read all dishs
router.get("/product", getAllStationeryProduct)

// Update a dish by ID
router.put("/product/update/:id", updateStationeryProduct)

// Delete a dish by ID
router.delete("/product/delete/:id", deleteStationeryProduct)

module.exports = router
