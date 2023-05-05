const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const DATABASE_URL = process.env.DATABASE_URL
mongoose.connect(DATABASE_URL)

const db = mongoose.connection

db.on("error", (err) => console.log("Database connection error :", err))
db.on("open", () => {
    console.log("Database connection success")
})