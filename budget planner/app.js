const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files

let transactions = []; // This would be replaced by a database in a real app

app.post('/addTransaction', (req, res) => {
    const { description, amount } = req.body;
    transactions.push({ description, amount });
    // In a real app, save this to a database
    res.status(200).send({ message: 'Transaction added successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
