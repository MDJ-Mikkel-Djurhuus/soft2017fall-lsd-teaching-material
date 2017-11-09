const express = require('express')
const app = express()

const log4js = require('log4js');
const logger = log4js.getLogger();
log4js.configure({
  appenders: {
    console: { type: "console" },
    logfaces: { type: 'logFaces-HTTP', url: 'http://localhost:9700' }
  },
  categories: {
    default: { appenders: [ 'console', 'logfaces' ], level: 'info' }
  }
});

app.get('/:param', (req, res) => {
	logger.level = 'debug';
	logger.debug("param: " + req.params.param);
    res.send('Hello World!')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))