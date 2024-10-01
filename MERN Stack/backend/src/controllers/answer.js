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

  read: async (req, res) => {

    const data = await Answer.findOne({ _id: req.params.id })

    res.status(200).send({
      error: false,
      data
    })
  },

  update: async (req, res) => {

    const data = await Answer.updateOne({ _id: req.params.id }, req.body)

    res.status(202).send({
      error: false,
      data,
      new: await Answer.findOne({ _id: req.params.id })
    })
  },

  delete: async (req, res) => {

    const data = await Answer.deleteOne({ _id: req.params.id })

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data
    })
  },

}