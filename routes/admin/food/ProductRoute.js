const router = require("express").Router()

const {
	createProduct,
	getAllProducts,
	updateProduct,
	deleteProduct,
} = require("../../../controllers/admin/food/ProductController")

// Create a new product
router.post("/product/insert", createProduct)

// Read all products
router.get("/product", getAllProducts)

// Update a product by ID
router.put("/product/update/:id", updateProduct)

// Delete a product by ID
router.delete("/product/delete/:id", deleteProduct)

module.exports = router
