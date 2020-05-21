const { Router } = require('express');
const HttpStatus = require('http-status-codes');
const { Sports } = require('../enums');

const router = Router();

router.get('/sports', async (req, res, next) => {
  try {
    const data = Object.values(Sports);
    return res.status(HttpStatus.OK).json({ data });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
