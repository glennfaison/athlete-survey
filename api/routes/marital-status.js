const { Router } = require('express');
const HttpStatus = require('http-status-codes');
const { MaritalStatus } = require('../enums');

const router = Router();

router.get('/marital-status', async (req, res, next) => {
  try {
    const data = Object.values(MaritalStatus);
    return res.status(HttpStatus.OK).json({ data });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
