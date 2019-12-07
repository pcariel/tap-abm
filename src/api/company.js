const express = require('express');

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
   * UserAPI - Retrive all companies
   * @param {express.Request} req Express request object
   * @param {express.Response} res Express response object
   * @param {express.NextFunction} next Express next middleware function
   */
  async getCompanies(req, res, next) {
    res.sendStatus(501)
  }

  /**
   * UserAPI - Retrive company by id
   * @param {express.Request} req Express request object
   * @param {express.Response} res Express response object
   * @param {express.NextFunction} next Express next middleware function
   */
  async getCompanyById(req, res, next) {
    res.sendStatus(501)
  }

  /**
  * UserAPI - Create new company
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  async createCompany(req, res, next) {
    res.sendStatus(501)
  }

  /**
  * UserAPI - Update company by id
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  async putCompanyById(req, res, next) {
    res.sendStatus(501)
  }

  /**
  * UserAPI - Update part of the resource company by id
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  async patchCompanyById(req, res, next) {
    res.sendStatus(501)
  }

  /**
  * UserAPI - Delete company by id
  * @param {express.Request} req Express request object
  * @param {express.Response} res Express response object
  * @param {express.NextFunction} next Express next middleware function
  */
  async deleteCompanyById(req, res, next) {
    res.sendStatus(501)
  }

  get router() {
    return this.api;
  }
}

module.exports = CompanyAPI;
