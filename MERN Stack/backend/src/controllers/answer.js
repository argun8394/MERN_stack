"use strict"

//Answer controller
const Answer = require('../models/answer')

module.exports = {

  list: async (req, res) => {

    const filters = (req.user?.is_superadmin) ? {} : { _id: req.user._id }

    const data = await Answer.find();

    res.status(200).send({
      error: false,
      data,
    });
  },

  create: async (req, res) => {
    // Auto add user_id to req.body:
    req.body.user_id = req.user?._id

    const data = await Answer.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      data,
    });
  },

}