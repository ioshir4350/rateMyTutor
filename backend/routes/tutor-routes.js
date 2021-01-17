const express = require('express')
const tutorControllers = require('../controllers/tutor-controller')
const router = express.Router()

router.get('/', tutorControllers.getTutors)

router.get('/:tutorID', tutorControllers.getTutor)

router.post('/makeComment', tutorControllers.makeComment)


module.exports = router