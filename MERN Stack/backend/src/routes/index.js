"use strict"
/* ------------------------------------------------------ */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// auth:
router.use('/auth', require('./auth'))

// user:
router.use('/users', require('./user'))

// sale:
router.use('/questions', require('./question'))

// answer:
router.use('/answers', require('./answer'))

module.exports = router