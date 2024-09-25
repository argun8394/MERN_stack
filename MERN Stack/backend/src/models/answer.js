"use strict"
/* ----------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "answer": "My name is John",
}
/* ------------------------------------------------------- */
// Answer Model:

const AnswerSchema = new mongoose.Schema({

    // user_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },

    answer: {
        type: String,
        default: ''
    },

}, { collection: 'answers', timestamps: true })

/* ------------------------------------------------------- */
AnswerSchema.pre('init', function (data) {
    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('tr-tr')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Answer', AnswerSchema)