// NO IDEA HOW TO CONNECT THIS FILE

const express = require('express');
const router = express.Router();

// YOUR API ROUTES HERE

// SAMPLE ROUTE
router.use('/users', (req, res) => {
    res.send('yesss');
});

module.exports = router;
