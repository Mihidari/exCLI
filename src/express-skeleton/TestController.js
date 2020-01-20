const router = require('express').Router()

router.get('/test', (req, res) => {
    let start = process.hrtime()
    res.status(200).json(
        {message : "Success",
        executionTime: `${process.hrtime(start)[1]/1000000}ms`})
})

module.exports = router