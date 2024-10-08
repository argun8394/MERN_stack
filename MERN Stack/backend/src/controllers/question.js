"use strict"

//Question controller
const Question = require('../models/question')

module.exports = {

  list: async (req, res) => {
    const data = await Question.find();

    res.status(200).send({
      error: false,
      data,
    });
  },

  create: async (req, res) => {
    // Auto add user_id to req.body:
    req.body.user_id = req.user?._id

    const data = await Question.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      data,
    });
  },

  read: async (req, res) => {

    const data = await Question.findOne({ _id: req.params.id })

    res.status(200).send({
      error: false,
      data
    })
  },

  update: async (req, res) => {

    const data = await Question.updateOne({ _id: req.params.id }, req.body)

    res.status(202).send({
      error: false,
      data,
      new: await Question.findOne({ _id: req.params.id })
    })
  },

  delete: async (req, res) => {

    const data = await Question.deleteOne({ _id: req.params.id })

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data
    })
  },


}