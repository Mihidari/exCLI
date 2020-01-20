const express = require('express')
const app = express()
const colors = require('./config/ansiColor')
require('dotenv').config()

app.use(express.json())

app.use('/api', require('./router/TestController'))

const port = process.env.PORT || 4500

app.listen(port, () => {
    console.clear()
    console.log(colors.yellow(`---Server is running on port ${port}---`))
    console.log(colors.magenta('Test api: ')+ colors.underscore().blue(`http://localhost:${port}/api/test`))
})