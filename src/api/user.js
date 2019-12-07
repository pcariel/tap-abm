const express = require('express');

class UserAPI {
  constructor() {
    this.api = express.Router();
    this.api.get('/', this.getUsers);
    this.api.post('/', this.createUser);
    this.api.get('/:id', this.getUserById);
    this.api.put('/:id', this.putUserById);
    this.api.patch('/:id', this.patchUserById);
    this.api.delete('/:id', this.deleteUserById);
  }

  /**
   * UserAPI - Retrive all user
   * @param {express.Request} req Express request object
   * @param {express.Response} res Express response object
   * @param {express.NextFunction} next Express next middleware function
   */
  async getUsers(req, res, next) {
    res.sendStatus(501)
  }

  /**
   * UserAPI - Retrive user by id
   * @param {express.Request} req Express request object
   * @param {express.Response} res Express response object
   * @param {express.NextFunction} next Express next middleware function
   */
  async getUserById(req, res, next) {
    res.sendStatus(501)
  }

  /**
  * UserAPI - Create new user
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  async createUser(req, res, next) {
    res.sendStatus(501)
  }

  /**
  * UserAPI - Update user by id
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  async putUserById(req, res, next) {
    res.sendStatus(501)
  }

  /**
  * UserAPI - Update part of the resource user by id
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  async patchUserById(req, res, next) {
    res.sendStatus(501)
  }

  /**
  * UserAPI - Delete user by id
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  async deleteUserById(req, res, next) {
    res.sendStatus(501)
  }

  get router() {
    return this.api;
  }
}

module.exports = UserAPI;
