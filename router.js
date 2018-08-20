var express = require('express');
var router = express.Router();
var messages = require('./messages');

router.post('/broadcast', messages.broadcastMessage);
router.post('/noreply', messages.noreplyMessage);



module.exports = router;