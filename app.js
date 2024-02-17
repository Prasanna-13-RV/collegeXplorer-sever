require("dotenv").config()

const express = require("express")
const cors = require("cors")

const app = express()

const dbConnect = require("./dbConnect")

// routers
// ADMIN
// Food
const ShopRouter = require("./routes/admin/food/ShopRoute")
const ProductRouter = require("./routes/admin/food/ProductRoute")
const OrderRouter = require("./routes/admin/food/OrderRoute")
const UserRouter = require("./routes/admin/food/UserRoute")
const CartRouter = require("./routes/admin/food/CartRoute")

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
app.use("/api/admin", ShopRouter)
// Product
app.use("/api/admin", ProductRouter)
// Order
app.use("/api/admin", OrderRouter)
// User
app.use("/api/admin", UserRouter)
// Cart
app.use("/api/admin", CartRouter)

app.listen(process.env.PORT, () => {
	console.log(`Server is running in ${process.env.PORT}`)
})
