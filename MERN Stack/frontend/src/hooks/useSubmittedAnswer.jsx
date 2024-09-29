import axios from 'axios';

const API = import.meta.env.VITE_API_URL;


const useSubmittedAnswer = (submittedAnswers, setSubmittedAnswers, formData, setFormData, setSuccess, setError, error) => {

    const token = localStorage.getItem('accessToken');
 
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(`${API}/answers`, formData, {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
    
          if (response.status === 201) {
            setSubmittedAnswers([
              ...submittedAnswers,
              { answer: formData.answer }
            ]);    
    
            setSuccess('Answer submitted successfully!');
            setError('');
            setFormData({ answer: '' });
          }
        } catch (err) {
          setError('Failed to submit answer. ' + err.message);
          setSuccess('');
          console.log(error);
        }
      };
    
    return {handleSubmit}
}

export default useSubmittedAnswer