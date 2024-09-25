"use strict"
/* ----------------------------------------------------- */
const router = require('express').Router()
/* -------------------------------------------------------*/
// routes/answer:

const answer = require('../controllers/answer')

router.route('/')
    .get(answer.list)
    .post(answer.create)

router.route('/:id')
    // .get(answer.read)
    // .put(answer.update)
    // .patch(answer.update)
    // .delete(answer.delete)

    /* ------------------------------------------------------*/
    module.exports = router
