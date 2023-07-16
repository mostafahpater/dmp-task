import { useFormik } from 'formik';
import React, { useState,useLayoutEffect, useRef } from 'react'
import { FaRegCommentDots } from 'react-icons/fa6';
import LocalizedStrings from 'react-localization';
import ReactStars from 'react-stars';
function FeedBack({language}) {
    let strings = new LocalizedStrings({
        en:{
            rate:'How much do you rate the site?',
            problem:'Did you face any problems? Do you want to add a feature that does not exist yet?',
            send:'send'
        },
        ar:{
            rate:'كم تقيم الموقع؟',
            problem:'هل واجهت أي مشاكل؟ هل تريد إضافة ميزة غير موجودة بعد؟',
            send:'إرسال'
        }
    })
    const[showForm,setShowForm]=useState(false)
    const[newRating,setNewRating]=useState(0)
    strings.setLanguage(language)
    const feedbackForm = useFormik({
        initialValues: {
            rate: newRating,
            problem: '',
            
        },
        onSubmit: function (values) {
            console.log(values)
        }
    })
    const ratingChanged = (newRating) => {
        setNewRating(newRating)
      }
    return (
        <div className={`fixed z-10 top-[50%] ${!showForm?'-right-[48px]':'right-0'}`}>
    <div onClick={()=>setShowForm(!showForm)} className={`text-third relative ${showForm?'right-[140px]':'right-0'} p-2 bg-black -rotate-90 flex items-center cursor-pointer rounded-lg`}>
          <FaRegCommentDots />
          <p>Give Feedback</p>
      </div>
     {showForm&& <form onSubmit={feedbackForm.handleSubmit} className='bg-white p-4 rounded-2xl relative -top-36 w-60 flex flex-col items-center'>
        <div>

        <label htmlFor="email" class="block mb-2 text-sm font-medium text-black ">1 - {strings.rate}</label>

        {(newRating===.5||newRating===1)?
        <p className='text-6xl'>&#128532;</p>:
        (newRating===1.5||newRating==2)?
        <p className='text-6xl'>&#128528;</p>:
        (newRating===2.5||newRating==3)?
        <p className='text-6xl'>&#128522;</p>:
        (newRating===3.5||newRating==4)?
        <p className='text-6xl'>&#128525;</p>:
        (newRating===4.5||newRating===5)?
        <p className='text-6xl'>&#128526;</p>:null}
        <ReactStars
  count={5}
  onChange={ratingChanged}
  value={newRating}
  size={24}
  color2={'#ffd700'} />
  </div>
              <div class="mb-6">
                  <label htmlFor="problem" class="block mb-2 text-sm font-medium text-black">2 - {strings.problem}</label>
                  <textarea name='problem' onChange={feedbackForm.handleChange} type="problem" id="problem" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="..." required />
              </div>
             
              <button class="text-white bg-main  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ">{strings.send}</button>
          </form>}
          </div>
  )
}

export default FeedBack