const log = require('util');
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    log.log("test")
    res.send('Hello World!')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))