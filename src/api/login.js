const express = require('express');
const jwt = require('jsonwebtoken');

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
  // eslint-disable-next-line class-methods-use-this
  async auth(req, res, next) {
    const { username, password } = req.body;
    const today = new Date();

    // eslint-disable-next-line eqeqeq
    if (username == 'admin' && password == 'admin') {
      const token = jwt.sign({
        data: 'foobar',
      }, 'secret', { expiresIn: '6h' });

      res.status(200).json({
        token,
        expires_in: today.setHours(today.getHours() + 6),
      });
    } else {
      res.status(400).json({
        message: 'Login invalid',
      });
    }

  }

  get router() {
    return this.api;
  }
}

module.exports = LoginAPI;
