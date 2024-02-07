require("dotenv").config()

const express = require("express")
const cors = require("cors")

const app = express()

const dbConnect = require("./dbConnect")

// routers
// ADMIN
// Food
const restaurantRouter = require("./routes/admin/food/RestaurantRoute")
const DishRouter = require("./routes/admin/food/DishRoute")
const OrderRouter = require("./routes/admin/food/OrderRoute")
const UserRouter = require("./routes/admin/food/UserRoute")
const CartRouter = require("./routes/admin/food/CartRoute")

// Stationery
const StationeryShop = require("./routes/admin/stationery/ShopRoute")
const StationeryProduct = require("./routes/admin/stationery/ProductRoute")
const StationeryOrder = require("./routes/admin/stationery/OrderRoute")
const StationeryCart = require("./routes/admin/stationery/CartRoute")

// CLIENT
const ApiRoute = require("./routes/client/food/ApiRoute")
const morgan = require("morgan")

dbConnect()
app.use(express.json())
app.use(cors())
app.use(morgan())

app.get("/api", (req, res) => {
	res.send("Hello World")
})

// ADMIN
// Restaurant
app.use("/api/admin", restaurantRouter)
// Dish
app.use("/api/admin", DishRouter)
// Order
app.use("/api/admin", OrderRouter)
// User
app.use("/api/admin", UserRouter)
// Cart
app.use("/api/admin", CartRouter)

// Stationery Cart
app.use("/api/admin", StationeryCart)
// Stationery Order
app.use("/api/admin", StationeryOrder)
// Stationery Product
app.use("/api/admin", StationeryProduct)
// Stationery Shop
app.use("/api/admin", StationeryShop)

// CLIENT
// My API
app.use("/api/client", ApiRoute)

app.listen(process.env.PORT, () => {
	console.log(`Server is running in ${process.env.PORT}`)
})
