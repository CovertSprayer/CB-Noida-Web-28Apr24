import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Quote from '../components/Quote';

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [text, setText] = useState("");

  async function fetchQuotes() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/quotes`);
  
      if(response.status === 200){
        setQuotes(response.data);
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  useEffect(() => {
    fetchQuotes()
  }, [])

  async function submitHandler(){
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/quotes`, {
        text
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      if(response.status === 201){
        console.log(response.data);
        setQuotes(prev => [...prev, response.data])
        alert("successfully posted quote");
        setText("");
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  }



  return (
    <div>
      <div className='mb-8'>
        <h1 className='text-2xl mb-4'>Something in your mind?</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}>
          <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <label for="comment" class="sr-only">Your comment</label>
                  <textarea onChange={(e) => {
                    setText(e.target.value)
                  }} value={text} id="comment" rows="4" class="outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required ></textarea>
              </div>
              <div class="flex items-center justify-end px-3 py-2 border-t dark:border-gray-600">
                  <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                      Post Quote
                  </button>
              </div>
          </div>
        </form>
      </div>
      {
        quotes.map(quote => <Quote key={quote._id} quote={quote}/>)
      }
    </div>
  )
}

export default Home