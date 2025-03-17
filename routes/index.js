const express = require('express');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();
const PORT = 3000;

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB:", err));

// Middleware để xử lý JSON
app.use(express.json());

// Routes
app.use('/api/categories', categoryRoutes);

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
