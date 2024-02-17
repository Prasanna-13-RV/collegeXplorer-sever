const Product = require("../../../modals/product")

// Create a new product
const createProduct = async (req, res) => {
	try {
		const {
			productName,
			shop,
			productDescription,
			productImage,
			productPrice,
			isProductAvailable,
		} = req.body
		const newProduct = new Product({
			productName: productName,
			shop: shop,
			productDescription: productDescription,
			productImage: productImage,
			productPrice: productPrice,
			isProductAvailable: isProductAvailable,
		})

		const savedProduct = await newProduct.save()
		// console.log("Product created:", savedProduct)
		res.json(savedProduct)
	} catch (error) {
		console.error("Error creating product:", error)
	}
}

// Read all products
const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find().populate("shop")
		// console.log("All products:", products)
		res.json(products)
	} catch (error) {
		console.error("Error retrieving products:", error)
	}
}

// Update a product by ID
const updateProduct = async (req, res) => {
	try {
		const id = req.params.id
		const {
			productName,
			shop,
			productDescription,
			productImage,
			productPrice,
			isProductAvailable,
		} = req.body
		const updatedProduct = await Product.findByIdAndUpdate(
			id,
			{
				productName: productName,
				shop: shop,
				productDescription: productDescription,
				productImage: productImage,
				productPrice: productPrice,
				isProductAvailable: isProductAvailable,
			},
			{ new: true }
		)

		// console.log("Updated product:", updatedProduct)
		res.json(updatedProduct)
	} catch (error) {
		console.error("Error updating product:", error)
	}
}

// Delete a product by ID
const deleteProduct = async (req, res) => {
	try {
		const id = req.params.id
		const deletedProduct = await Product.findByIdAndDelete(id)
		// console.log("Deleted product:", deletedProduct)
		res.json(deletedProduct)
	} catch (error) {
		console.error("Error deleting product:", error)
	}
}

module.exports = {
	createProduct,
	getAllProducts,
	updateProduct,
	deleteProduct,
}