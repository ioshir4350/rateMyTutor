const express = require('express')
const companyController = require('../controllers/company-controller')
const router = express.Router()

router.get('/', companyController.getCompanies)

router.get('/:companyID', companyController.getCompany)

module.exports = router