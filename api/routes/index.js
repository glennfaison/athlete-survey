const { Router } = require('express');
const profileRoutes = require('./profile');
const sportRoutes = require('./sports');
const maritalStatusRoutes = require('./marital-status');

const router = Router();
const baseApi = '/api/v1';

router.use(baseApi, profileRoutes);
router.use(baseApi, sportRoutes);
router.use(baseApi, maritalStatusRoutes);

module.exports = router;
