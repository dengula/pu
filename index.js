const express = require("express");
const path = require("path"); // Để xử lý đường dẫn đến thư mục và tệp
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Cấu hình để phục vụ các tệp tĩnh từ thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use("/home", home);

// Connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
