/* eslint-disable import/newline-after-import */
const Router = require('express').Router;
const { HeaderValidationMiddleware } = require('../middlewares/header-validation-mdw');

const middlewares = [];
middlewares.push(HeaderValidationMiddleware);

module.exports = Router().post('/:service', middlewares);
