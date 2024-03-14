const Attendance = require("../modals/attendance")

const createSingleAttendance = async (req, res) => {
    try {
        const { userId, date, status, location, image, time } = req.body
        const attendance = new Attendance({
            user: userId,
            date: date,
            status: status,
            location: location,
            image: image,
            time: time,  
        })
        const newAttendance = await attendance.save()
        res.json(newAttendance)
    } catch (error) {
        console.error("Error creating attendance:", error)
        throw error
    }
}

const getAllAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.find().populate("user")
        res.json(attendance)
    } catch (error) {
        console.error("Error retrieving attendance:", error)
        throw error
    }
}

module.exports = {
    createSingleAttendance,
    getAllAttendance,
}