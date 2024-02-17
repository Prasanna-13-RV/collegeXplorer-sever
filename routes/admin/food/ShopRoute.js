const router = require("express").Router()

const {
	createShop,
	getAllShops,
	updateShop,
	deleteShop,
} = require("../../../controllers/admin/food/ShopController")

// Create a new shop
router.post("/shop/insert", createShop)

// Read all shops
router.get("/shop", getAllShops)

// Update a shop by ID
router.put("/shop/update/:id", updateShop)

// Delete a shop by ID
router.delete("/shop/delete/:id", deleteShop)

module.exports = router
