// {"productDescription": "2asdgfasdfg", "productImage": "342sdfg", "productName": "dfghjdfghj56", "productPrice": "7567", "isProductAvailable": false, "restaurant": "null"}

const StationeryProduct = require("../../../modals/stationery/stationeryProduct")

// Create a new product
const createStationeryProduct = async (req, res) => {
	try {
		const {
			productName,
			shopName,
			productDescription,
			productImage,
			productPrice,
			isProductAvailable,
		} = req.body
		const newProduct = new StationeryProduct({
			productName: productName,
			shopName: shopName,
			// shopName: "65c64c914705d27e19b74a26",
			productDescription: productDescription,
			productImage: productImage,
			productPrice: productPrice,
			isProductAvailable: isProductAvailable,
		})

		const savedProduct = await newProduct.save()
		// console.log("product created:", savedProduct)
		res.json(savedProduct)
	} catch (error) {
		console.error("Error creating product:", error)
	}
}

// Read all products
const getAllStationeryProduct = async (req, res) => {
	try {
		const products = await StationeryProduct.find().populate("shopName")
		// console.log("All products:", products)
		res.json(products)
	} catch (error) {
		console.error("Error retrieving products:", error)
	}
}

// Update a product by ID
const updateStationeryProduct = async (req, res) => {
	try {
		const id = req.params.id
		const {
			productName,
			shopName,
			productDescription,
			productImage,
			productPrice,
			isProductAvailable,
		} = req.body
		const updatedProduct = await StationeryProduct.findByIdAndUpdate(
			id,
			{
				productName: productName,
				shopName: shopName,
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
const deleteStationeryProduct = async (req, res) => {
	try {
		const id = req.params.id
		const deletedStationeryProduct = await StationeryProduct.findByIdAndDelete(id)
		// console.log("Deleted product:", deletedStationeryProduct)
		res.json(deletedStationeryProduct)
	} catch (error) {
		console.error("Error deleting product:", error)
	}
}

module.exports = {
	createStationeryProduct,
	getAllStationeryProduct,
	updateStationeryProduct,
	deleteStationeryProduct,
}
