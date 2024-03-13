const { createSingleAttendance } = require("../../../controllers/admin/food/AttendanceController")

const router = require("express").Router()

router.get("/attendance", (req, res) => {
    res.send("GET request to /admin/food/attendance")
})

router.post("/attendance/insert", createSingleAttendance)

module.exports = router
