const express = require('express');
const { Company } = require('../models');
const { logger } = require('../logging');

class CompanyAPI {
  constructor() {
    this.api = express.Router();
    this.api.get('/', this.getCompanies);
    this.api.post('/', this.createCompany);
    this.api.get('/:id', this.getCompanyById);
    this.api.put('/:id', this.putCompanyById);
    this.api.patch('/;id', this.patchCompanyById);
    this.api.delete('/:id', this.deleteCompanyById);
  }

  /**
   * CompanyAPI - Retrive all companies
   * @param {express.Request} req Express request object
   * @param {express.Response} res Express response object
   * @param {express.NextFunction} next Express next middleware function
   */
  // eslint-disable-next-line class-methods-use-this
  async getCompanies(req, res, next) {
    let { sort_by, limit, offset } = req.query;
    limit = limit || 2;
    offset = offset || 0;
    logger.debug(`Request getCompanies incomming query: ${JSON.stringify(req.query)}`);

    try {
      const total = await Company.count();
      const users = await Company.findAll({
        limit,
        offset,
        order: [
          ['name', sort_by || 'ASC'],
        ],
      });
      res.status(200).json({
        total,
        pages: total / limit,
        page: offset + 1,
        items: users,
      });
    } catch (error) {
      logger.error(`Request getCompanies ${error}`);

      next(error);
    }
  }

  /**
   * CompanyAPI - Retrive company by id
   * @param {express.Request} req Express request object
   * @param {express.Response} res Express response object
   * @param {express.NextFunction} next Express next middleware function
   */
  async getCompanyById(req, res, next) {
    res.sendStatus(501)
  }

  /**
  * CompanyAPI - Create new company
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  // eslint-disable-next-line class-methods-use-this
  async createCompany(req, res, next) {
    const {
      name,
      legal_name,
      email,
      phone,
      address,
    } = req.body;
    logger.debug(`Request createCompany incomming Body: ${JSON.stringify(req.body)}`);

    try {
      const user = await Company.create({
        name,
        legal_name,
        email,
        phone,
        address,
      });
      res.status(201).json(user);
    } catch (error) {
      logger.error(`Request createCompany ${error}`);
      next(error);
    }
  }

  /**
  * CompanyAPI - Update company by id
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  async putCompanyById(req, res, next) {
    logger.info('not implement');
    res.sendStatus(501)
  }

  /**
  * CompanyAPI - Update part of the resource company by id
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  async patchCompanyById(req, res, next) {
    logger.info('not implement');
    res.sendStatus(501)
  }

  /**
  * CompanyAPI - Delete company by id
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  async deleteCompanyById(req, res, next) {
    logger.info('not implement');
    res.sendStatus(501)
  }

  get router() {
    return this.api;
  }
}

module.exports = CompanyAPI;
