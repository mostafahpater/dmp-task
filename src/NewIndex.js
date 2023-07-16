import React, { useState } from 'react'
import App from './App'
import FeedBack from './components/global/FeedBack'

function NewIndex() {
    const [language, setLanguage] = useState('ar')
  return (
    <div>
        <FeedBack language={language}/>
    <App language={language} setLanguage={setLanguage}/>
    </div>
  )
}

export default NewIndex