const express = require('express');
const router = express.Router();

//calling router for homepage
const homepage = require('./routesAPI');

//set router
router.use("/homepage", homepage);

module.exports = router;