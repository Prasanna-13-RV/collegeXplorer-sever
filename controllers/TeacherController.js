const bcrypt = require("bcrypt")
const Teacher = require("../modals/teacher")

const createTeacher = async (req, res) => {
	try {
		const { name, email, password, className } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
		const newTeacher = await Teacher.create({
			name: name,
			email: email,
			password: hashedPassword,
			className: className
		})
        const savedTeacher = await newTeacher.save()
		res.json(newTeacher)
	} catch (error) {
		console.error("Error creating teacher:", error)
		throw error
	}
}

const getAllTeachers = async (req, res) => {
	try {
		const teachers = await Teacher.find()
		res.json(teachers)
	} catch (error) {
		console.error("Error retrieving teachers:", error)
		throw error
	}
}

module.exports = {
	createTeacher,
	getAllTeachers,
}
