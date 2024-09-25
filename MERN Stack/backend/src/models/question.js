"use strict"
/* ----------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "question": "what is your name",
}
/* ------------------------------------------------------- */
// Question Model:

const QuestionSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    question: {
        type: String,
        default: ''
    },

}, { collection: 'questions', timestamps: true })

/* ------------------------------------------------------- */
QuestionSchema.pre('init', function (data) {
    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('tr-tr')
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Question', QuestionSchema)