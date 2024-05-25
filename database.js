const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("MongoDB conectado")
  } catch (error) {
    console.log("Error al conectar con MongoDB");
    process.exit(1);
  }
}

module.exports = connectDB;
