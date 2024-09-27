const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/:price', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/donate.html'));
})

module.exports = router