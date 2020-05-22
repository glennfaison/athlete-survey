const { Router } = require('express');
const HttpStatus = require('http-status-codes');
const { Genders } = require('../enums');

const router = Router();

router.get('/genders', async (req, res, next) => {
  try {
    const data = Object.values(Genders);
    return res.status(HttpStatus.OK).json({ data });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
