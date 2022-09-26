const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(express.json());   
app.use(cors()) 
// app.use((req, res, next) => {//example of middleware 
//     next();
// })

app.use("/users", userRouter);
app.use("/note", noteRoutes);

app.get("/", (req, res) => {
    res.status(200).send("Note API Made By Prajapati omkar")
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server started on port no "+PORT);
        });
    })
    .catch((error) => {
        console.log(error)
    })

