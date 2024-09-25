import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Chat = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submittedAnswers, setSubmittedAnswers] = useState([]);
  const [formData, setFormData] = useState({
    answer: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const token = localStorage.getItem('accessToken');
  const getQuestions = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/questions', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });

      if (response.status == 200) {
        setSuccess('Get data successfull!');
        setError('');
        setQuestions(response.data.data)
        console.log(success)
        console.log(questions)
      }
    } catch (err) {
      setError('Failed get Data.');
      setSuccess('');
      console.log(error)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/answers', formData, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });

      if (response.status === 201) {
        arr.push(formData.answer)
        setSubmittedAnswers([
          ...submittedAnswers,
          { answer: formData.answer }
        ]);    

        setSuccess('Answer submitted successfully!');
        setError('');
        setFormData({ answer: '' });
      }
    } catch (err) {
      setError('Failed to submit answer. ');
      setSuccess('');
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => getQuestions(), 2000)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center w-full pageH mt-16">

      <div className="flex flex-col justify-end items-center gap-2 border py-6 px-8 rounded-md min-w-[500px] bg-[#120a2e] text-white overflow-hidden h-[700px]">

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {
          questions.length > 0 && (
            <p className="w-full capitalize">{questions[currentQuestionIndex].question}</p>
          )
        }

        {
          submittedAnswers.length > 0 && (
            submittedAnswers.map((answer, index) => (
              <div key={index} className="flex flex-col w-full gap-2">
                <p className="text-end capitalize">{answer.answer}</p>

                {
                  questions[index + 1]?.question && (
                    <p className="text-start capitalize"> {questions[index + 1]?.question}</p>
                  )
                }
              </div>
            )))
        }

        {questions.length > 0 ? (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col gap-2  ">
              <input
                type="text"
                name="answer"
                value={formData.answer}
                onChange={handleChange}
                required
                className="border rounded-md px-2 py-1"
                placeholder='your answer...'
              />

              <button type="submit"
                disabled={submittedAnswers.length === questions.length}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >Send</button>
            </div>
          </form>
        ) : (
          <p>Loading questions...</p>
        )}
      </div>
    </div>
  );
}

export default Chat