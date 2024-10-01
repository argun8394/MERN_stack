"use strict"
/* ----------------------------------------------------- */
const router = require('express').Router()
/* -------------------------------------------------------*/
// routes/question:

const { isLogin } = require('../middlewares/permissions')
const question = require('../controllers/question')

// URL: /questions

router.use(isLogin) 

router.route('/')
    .get(question.list)
    .post(question.create)

router.route('/:id')
    .get(question.read)
    .put(question.update)
    .patch(question.update)
    .delete(question.delete)

    /* ------------------------------------------------------*/
    module.exports = router
