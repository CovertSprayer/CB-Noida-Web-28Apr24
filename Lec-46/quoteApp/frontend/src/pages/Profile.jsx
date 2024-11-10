import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Quote from '../components/Quote';

const Profile = ({user}) => {
  const [userQuotes, setUserQuotes] = useState([]);

  async function getUserQuotes() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      if(response.status === 200){
        setUserQuotes(response.data.quotes);
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  useEffect(() => {
    getUserQuotes();
  }, [])


  function updateQuote(quoteData){
    // setUserQuotes(prevQuotes => prevQuotes.map(quote => {}))
    const newQuotes = userQuotes.map(quote => 
                                  quote._id === quoteData._id ? {...quoteData}: quote)
    setUserQuotes(newQuotes);
  }

  function removeQuote(id){

  }

  return (
    <div>
      {userQuotes.map(quote => <Quote key={quote._id} quote={quote} user={user} updateQuote={updateQuote} removeQuote={removeQuote}/>)}
      {/* {userQuotes.map(quote => 
      <div key={quote._id} className='flex gap-2 border-b-2 mb-6 pb-6 dark:text-white'>
        <div className='border-2 w-10 h-10 rounded-full flex justify-center items-center shrink-0'>
          {`${user.fullName.split(" ")[0][0]} ${user.fullName.split(" ")[1][0]}`}
        </div>
        <div className='grow'>
          { 
            edit ? <textarea className='w-full'>{quote.text}</textarea> : 
            <p className='font-merriweather'>“{quote.text}”</p>
          }
          <div className='flex gap-3 justify-end'>
            <span className='text-blue-500 cursor-pointer hover:underline'>Delete</span>
            <span onClick={() => {
              setEdit(true)
            }} className='text-blue-500 cursor-pointer hover:underline'>Edit</span>
          </div>
        </div>
      </div>)} */}
    </div>
  )
}

export default Profile