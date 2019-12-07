const express = require('express');

class LoginAPI {
  constructor() {
    this.api = express.Router();
    this.api.post('/', this.auth);
  }

  /**
  * LoginAPI - Auth user by Username & Password
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  async auth(req, res, next) {
    res.sendStatus(501);
  }

  get router() {
    return this.api;
  }
}

module.exports = LoginAPI;
