const express = require('express');
const router = express.Router();

let data = [];

// API GET để lấy tất cả dữ liệu
router.get('/data', (req, res) => {
  res.status(200).json(data);
});

// API POST để thêm dữ liệu
router.post('/data', (req, res) => {
  const newData = req.body.data;
  if (typeof newData === 'string' && newData.length === 10) {
    data.push(newData);
    res.status(201).json({ message: 'Data added successfully.' });
  } else {
    res.status(400).json({ message: 'Data must be a string of exactly 10 characters.' });
  }
});

// API DELETE để xóa dữ liệu
router.delete('/data', (req, res) => {
  const index = data.findIndex(item => item === req.body.data);
  if (index !== -1) {
    data.splice(index, 1);
    res.json({ message: 'Data deleted successfully.' });
  } else {
    res.status(404).json({ message: 'Data not found.' });
  }
});

module.exports = router;
