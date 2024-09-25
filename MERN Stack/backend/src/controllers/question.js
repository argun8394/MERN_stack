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

}