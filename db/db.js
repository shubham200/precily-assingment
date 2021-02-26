const mongoose = require("mongoose");
const { url } = require("../config/dbConfig");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hellouser:hello123@cluster0.idstk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );

    console.log("connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
