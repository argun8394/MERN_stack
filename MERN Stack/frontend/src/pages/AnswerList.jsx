import React, { useEffect, useState } from 'react'
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

const AnswerList = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [answers, setAnswers] = useState([]);

    const token = localStorage.getItem('accessToken');

    const getAnswers = async () => {
        try {
            const response = await axios.get(`${API}/answers`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });

            if (response.status == 200) {
                setSuccess('Get data successfull!');
                setError('');
                setAnswers(response.data.data)
                console.log(success)
                console.log(answers)
            }
        } catch (err) {
            setError('Failed get Data.');
            setSuccess('');
            console.log(error)
        }
    }

    useEffect(() => {
        getAnswers()
    }, [])

    return (
        <div className="w-full flex justify-center items-center pageH">
            <div className="flex flex-col items-center gap-4 py-8 px-12 w-max ">
                <h2 className="font-bold text-3xl">AnswerList</h2>
              <div className="flex flex-col gap-2 ">
              {
                    answers.length > 0 && (
                        answers.map((item, index) => (
                            <div key={index} className="font-semibold">
                                <span>{index + 1 } </span> ) <span className="capitalize">{item.answer} </span>
                            </div>
                        ))
                    )
                }
              </div>
            </div>
        </div>
    )
}

export default AnswerList