const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const path = require("path");

const dataRouter = require("./routers/dataapi");
const clickRouter = require("./routers/countapi");


const port = process.env.PORT || 4000;


const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(dataRouter);
app.use(clickRouter);

app.listen(port, () => console.log(`Server is running at port ${port}`));