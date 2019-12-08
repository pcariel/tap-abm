const express = require('express');
const jwt = require('jsonwebtoken');

/**
 * Middleware valid if token exists & is valid
 * @param {express.Request} req Express request object
 * @param {express.Response} res Express response object
 * @param {express.NextFunction} next Express next middleware function
 */
async function isAuth(req, res, next) {
  if (req.headers.authorization) {
    const authorization = req.headers.authorization.split(' ');
    if (authorization[0] === 'Bearer') {
      const token = authorization[1];
      try {
        const decoded = jwt.verify(token, 'secret');
        return next();
      } catch (err) {
        return res.sendStatus(401);
      }
    }
  }
  return res.sendStatus(401);
}

module.exports = {
  isAuth,
};
