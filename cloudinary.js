
const cloudinary = require("cloudinary").v2

// Configure Cloudinary with your credentials
cloudinary.config({
	cloud_name: "ds2mjvnjy",
	api_key: "297786237414774",
	api_secret: "G6z9wg8ffltKqfYwRuYqjiPWP0Y",
})

// Function to upload an image to Cloudinary
const uploadImageToCloudinary = async (image) => {
	try {
		const cloudinaryResponse = await cloudinary.uploader.upload(image)
		return cloudinaryResponse.secure_url
	} catch (error) {
		console.error("Error uploading image to Cloudinary:", error)
		throw new Error("Failed to upload image to Cloudinary")
	}
}

module.exports = { uploadImageToCloudinary }
