// Import packages
const express = require("express");
const home = require("./routes/home");
const path = require("./home");
// Middlewares
const app = express();
app.use(express.json());
// Routes
app.use("/add", home);
app.use(express.static(path.join(__dirname, 'public')));
// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
