const express = require("express")
const cors = require("cors")
const products = require("./data-prices.json")
const productDetails = require("./data-details.json")

const PORT = 5000
const app = express()

app.get("/api/v1/products", cors(), (req, res) => {
  // Send back the `products` object.
})

app.get("/api/v1/product", cors(), (req, res) => {
  // Send back the `productDetails` object corresponding to
  // the passed in `id` query parameter.
})

app.listen(PORT, () => `Server running on port ${PORT}`)
