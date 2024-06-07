const mongoose = require("mongoose");

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1/rushmore");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;