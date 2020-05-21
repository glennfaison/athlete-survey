const { Router } = require('express');
const HttpStatus = require('http-status-codes');
const ProfileDao = require('../dao/profile');

const router = Router();

router.post('/profiles', async (req, res, next) => {
  delete req.body.id;
  delete req.body._id;
  try {
    const data = await ProfileDao.create(req.body);
    return res.status(HttpStatus.CREATED).json({ data });
  } catch (e) {
    next(e);
  }
});

router.get('/profiles', async (req, res, next) => {
  try {
    const data = await ProfileDao.find(req.query);
    return res.status(HttpStatus.OK).json({ data });
  } catch (e) {
    next(e);
  }
});

router.put('/profiles/:id', async (req, res, next) => {
  delete req.body.id;
  delete req.body._id;
  try {
    const data = await ProfileDao.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(HttpStatus.CREATED).json({ data });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
