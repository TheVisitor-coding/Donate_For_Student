const express = require('express')
const path = require('path')

const routerSuccess = express.Router()

routerSuccess.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/success.html'));
})

module.exports = routerSuccess