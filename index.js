//#region LIBRARY IMPORTS
import express from "express";
import dotenv from 'dotenv';
//#endregion

//#region ROUTES IMPORTS
import usersRoutes from "./routes/users.js";
import mongoose from "mongoose";
import helpers from "./helpers/helpers.js";
//#endregion

//#region DOTENV LIBRARY METHOD DECLARATION
dotenv.config();
//#endregion 

//#region GLOBAL VARIABLES
var PORT = process.env.PORT,
DB_URL = process.env.DB_URL
//#endregion

//#region DATABASE CONNECTION
mongoose.connect(DB_URL, () => console.log('database connected...'));
//#endregion

//#region MIDDLEWARE FOR ACCESSING JSON DATA FROM BODY OF REQUESTS
const app = express();
app.use(express.json());
//#endregion

//#region ROUTES DECLARATION
app.use("/api/users", usersRoutes);
//#endregion

//#region HOME ROUTE AND INVALID ROUTE DECLARATION

// GameDataApi
// app.get("/get", (req, res) => {
//     // helpers.getGameApiData(req,res);
// });


app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) => res.status(404).send("You've tried reaching a route that doesn't exist."));
//#endregion

//#region SERVER STARTS HERE
app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
//#endregion