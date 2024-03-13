const bcrypt = require("bcrypt")
const User = require("../modals/user")

// Create a new user
const createUser = async (req, res) => {
	try {
		const { name, registerNumber, className, password, email } = req.body

		const hashedPassword = await bcrypt.hash(password, 10)

		const newUser = new User({
			name: name,
			registerNumber: registerNumber,
			className: className,
			email: email,
			password: hashedPassword,
			orders: [],
		})

		const savedUser = await newUser.save()
		// console.log("User created:", savedUser)
		res.json(savedUser)
	} catch (error) {
		console.error("Error creating user:", error)
		throw error
	}
}

// Read all users
const getAllUsers = async (req, res) => {
	try {
		const users = await User.find().populate("orders")
		// console.log("All users:", users)
		res.json(users)
	} catch (error) {
		console.error("Error retrieving users:", error)
		throw error
	}
}

// Read a user by ID
const getUserById = async (req, res) => {
	try {
		const { email, password } = req.body
		const user = await User.findOne({ email: email }).populate("orders")
		if (user.password == password) {
			res.json(user)
		} else {
			throw error
		}
		// console.log("User by ID:", user)
	} catch (error) {
		console.error("Error retrieving user by ID:", error)
		throw error
	}
}

// Update a user by ID
const updateUser = async (req, res) => {
	try {
		const id = req.params.id
		const { name, registerNumber, className, email, orders } = req.body
		const updatedUser = await User.findByIdAndUpdate(
			id,
			{
				name: name,
				registerNumber: registerNumber,
				className: className,
				email: email,
				password: hashedPassword,
				orders: orders,
			},
			{
				new: true,
			}
		)
		// console.log("Updated user:", updatedUser)
		res.json(updatedUser)
	} catch (error) {
		console.error("Error updating user:", error)
		throw error
	}
}

// Delete a user by ID
const deleteUser = async (req, res) => {
	try {
		const id = req.params.id
		const deletedUser = await User.findByIdAndDelete(id)
		// console.log("Deleted user:", deletedUser)
		res.json(deletedUser)
	} catch (error) {
		console.error("Error deleting user:", error)
		throw error
	}
}

module.exports = {
	createUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
}