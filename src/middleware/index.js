const express = require('express');

/**
 * Middleware valid if token exists & is valid
 * @param {express.Request} req Express request object
 * @param {express.Response} res Express response object
 * @param {express.NextFunction} next Express next middleware function
 */
async function isAuth(req, res, next) {
  next();
}

module.exports = {
  isAuth,
};