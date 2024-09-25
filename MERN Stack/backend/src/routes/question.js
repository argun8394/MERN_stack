"use strict"
/* ----------------------------------------------------- */
const router = require('express').Router()
/* -------------------------------------------------------*/
// routes/question:

const question = require('../controllers/question')

router.route('/')
    .get(question.list)
    .post(question.create)

router.route('/:id')
    // .get(question.read)
    // .put(question.update)
    // .patch(question.update)
    // .delete(question.delete)

    /* ------------------------------------------------------*/
    module.exports = router
