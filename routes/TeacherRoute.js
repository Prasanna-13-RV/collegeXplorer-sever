const {
	createTeacher,
	getAllTeachers,
} = require("../controllers/TeacherController")

const router = require("express").Router()

router.get("/teacher", getAllTeachers)
router.post("/teacher/insert", createTeacher)

module.exports = router
