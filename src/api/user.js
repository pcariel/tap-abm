const express = require('express');
const { User, Company } = require('../models');
const { logger } = require('../logging');

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
  // eslint-disable-next-line class-methods-use-this
  async getUsers(_req, res, next) {
    logger.debug('Request getUsers incomming');

    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      logger.error(`Request getUsers ${error}`);
      next(error);
    }
  }

  /**
   * UserAPI - Retrive user by id
   * @param {express.Request} req Express request object
   * @param {express.Response} res Express response object
   * @param {express.NextFunction} next Express next middleware function
   */
  // eslint-disable-next-line class-methods-use-this
  async getUserById(req, res, next) {
    const { id } = req.params;
    logger.debug(`Request getUserById incomming id: ${id}`);

    try {
      const user = await User.findByPk(id, {
        include: 'Company',
      });
      if (!user) res.sendStatus(204);
      else res.status(200).json(user);
    } catch (error) {
      logger.error(`Request getUserById ${error}`);

      next(error);
    }
  }

  /**
  * UserAPI - Create new user
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  // eslint-disable-next-line class-methods-use-this
  async createUser(req, res, next) {
    const {
      full_name,
      phone,
      age,
      email,
      position,
      address,
      company_id,
    } = req.body;
    logger.debug(`Request createUser incomming Body: ${req.body}`);

    try {
      const company = await Company.findByPk(company_id);
      if (!company) res.status(400).json({ message: `company_id: ${company_id} no found` });
      else {
        const user = await User.create({
          full_name,
          phone,
          age,
          email,
          position,
          address,
          company_id,
        });
        res.status(201).json(user);
      }

    } catch (error) {
      logger.error(`Request createUser ${error}`);

      next(error);
    }
  }

  /**
  * UserAPI - Update user by id
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  // eslint-disable-next-line class-methods-use-this
  async putUserById(req, res, next) {
    const { id } = req.params;
    const {
      full_name,
      phone,
      age,
      email,
      position,
      address
    } = req.body;
    logger.debug(`Request putUserById incomming id: ${id}, Body: ${req.body}`);

    try {
      const user = await User.findByPk(id);

      if (!user) res.sendStatus(204);
      else {
        const userUpdate = await user.update({
          full_name,
          phone,
          age,
          email,
          position,
          address
        });
        res.status(200).json(user);

      }
    } catch (error) {
      logger.error(`Request putUserById ${error}`);

      next(error);
    }
  }

  /**
  * UserAPI - Update part of the resource user by id
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  // eslint-disable-next-line class-methods-use-this
  async patchUserById(req, res, next) {
    const { id } = req.params;
    const {
      full_name,
      phone,
      age,
      email,
      position,
      address
    } = req.body;
    logger.debug(`Request patchUserById incomming id: ${id}, Body: ${req.body}`);

    try {
      const user = await User.findByPk(id);

      if (!user) res.sendStatus(204);
      else {
        const userUpdate = await user.update({
          full_name: full_name || user.full_name,
          phone: phone || user.phone,
          age: age || user.age,
          email: email || user.email,
          position: position || user.position,
          address: address || user.address,
        });

        res.status(200).json(user);
      }
    } catch (error) {
      logger.error(`Request patchUserById ${error}`);

      next(error);
    }
  }

  /**
  * UserAPI - Delete user by id
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  // eslint-disable-next-line class-methods-use-this
  async deleteUserById(req, res, next) {
    const { id } = req.params;
    logger.debug(`Request deleteUserById incomming id: ${id}`);

    try {
      const user = await User.findByPk(id);
      if (!user) res.sendStatus(204);
      else {
        const userDelete = await user.destroy();

        res.status(200).json(user);
      }
    } catch (error) {
      logger.error(`Request deleteUserById ${error}`);

      next(error);
    }
  }

  get router() {
    return this.api;
  }
}

module.exports = UserAPI;
