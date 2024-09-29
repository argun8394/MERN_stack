
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

const useGetQuestions = (setSuccess, setError, setQuestions, success, error ) => {

    const token = localStorage.getItem('accessToken');
    
    const getQuestions = async () => {
        try {
            const response = await axios.get(`${API}/questions`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });

            if (response.status === 200) {
                setSuccess('Get data successfull!');
                setError('');
                setQuestions(response.data.data)
                console.log(success)
            }
        } catch (err) {
            setError('You must be logged in to proceed to the questions.');
            setSuccess('');
            console.log(error)
        }
    }
    return { getQuestions }
}

export default useGetQuestions