const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const { connectDB } = require("./db/pg.config");


(async function() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`);
        });
    } catch (err) {
        console.log(`Something went wrong... ${err}`);
    }
})();