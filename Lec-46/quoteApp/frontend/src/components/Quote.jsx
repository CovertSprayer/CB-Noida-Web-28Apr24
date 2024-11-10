import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import toast from 'react-hot-toast';

// "/", "/profile"

const Quote = ({quote, user, updateQuote, removeQuote}) => {
  const {pathname} = useLocation();
  const [edit, setEdit] = useState(false);
  const [edittedText, setEdittedText] = useState(quote.text);

  async function saveHandler() {
    try {
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/v1/quotes/${quote._id}`, {
        text: edittedText
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })

      if(response.status === 200){
        updateQuote(response.data);
        toast.success("Quote updated successfully!")
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  async function deleteHandler(){
    // try {
      
    //   const response;
    //   if(response.status === 200){
    //     removeQuote(response.data);
    //     toast.success("Quote deleted successfully")
    //   }
    // } catch (error) {
    //     toast.error(error.response.data.message)
    // }
  }

  return (
    <div className='flex gap-2 border-b-2 mb-6 pb-6 dark:text-white'>
      <div className='border-2 w-10 h-10 rounded-full flex justify-center items-center shrink-0'>
        {pathname === "/" && `${quote.author.fullName.split(" ")[0][0]} ${quote.author.fullName.split(" ")[1][0]}`}
        {pathname === "/profile" && `${user.fullName.split(" ")[0][0]} ${user.fullName.split(" ")[1][0]}`}
      </div>
      <div className='grow'>
        {
          edit ? <textarea onChange={(e) => {
            setEdittedText(e.target.value);
          }} value={edittedText} className={`${edit && "border-2"}  w-full`}></textarea> :
          <p className='font-merriweather'>“{quote.text}”</p>
        }
        {pathname === "/" && <p>- {quote.author.fullName}</p>}
        {
          pathname === "/profile" && 
          <div className='flex gap-3 justify-end'>
            {/* <span className='text-blue-500 cursor-pointer hover:underline'>
            {edit ? "Save" : "Delete"}
            </span> */}
            {
              edit ? <span onClick={() => {
                saveHandler();
              }} className='text-blue-500 cursor-pointer hover:underline'>Save</span> :
              <span onClick={()=> {
                deleteHandler();
              }} className='text-blue-500 cursor-pointer hover:underline'>Delete</span>
            }
            <span onClick={() => {
              setEdit(prev => !prev)
            }} className='text-blue-500 cursor-pointer hover:underline'>
              {edit ? "Cancel" : "Edit"}
            </span>
          </div>
        }
      </div>
    </div>
  )
}

export default Quote