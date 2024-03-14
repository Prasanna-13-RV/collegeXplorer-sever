const router = require("express").Router()

const {
	createUser,
	getAllUsers,
	getUserById,
	getUserByRegisterNumber,
	updateUser,
	updateClassForUser,
	deleteUser,
} = require("../controllers/UserController")

// Create a new user
router.post("/user/insert", createUser)

// Read all users
router.get("/user", getAllUsers)

// Read single users
router.get("/user/id/:id", getUserById)

// Read a user by register number
router.get("/user/registernumber/:registerNumber", getUserByRegisterNumber)

// Update a user by ID
router.put("/user/update/:id", updateUser)

// Update a user for className
router.put("/user/update/className/:id", updateClassForUser)

// Delete a user by ID
router.delete("/user/delete/:id", deleteUser)

module.exports = router
