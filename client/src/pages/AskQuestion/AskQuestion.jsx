import React from 'react'
import './AskQuestion.css'

const AskQuestion = () => {
  

  return (
     <div className='ask-question'>
       <div className="ask-ques-container">
         <h1>Ask a Public Question</h1>
         <form>
            <div className="ask-form-container">
                <label htmlFor='ask-ques-title'>
                    <h4>Title</h4>
                    <p>Be Specific and Imagine you're asking a Question to another person</p>
                    <input type='text'  id='ask-ques-title' placeholder='e.g What is react js' />
                </label>
                <label htmlFor='ask-ques-body'>
                    <h4>Body</h4>
                    <p>Include all the Informtion Someone needs to answer your question </p>
                    <textarea id='ask-ques-body' cols="30" rows="10"></textarea>
                </label>
                <label htmlFor='ask-ques-tags'>
                    <h4>Tags</h4>
                    <p>Add 5 tags to describe what your question is about </p>
                    <input type='text'  id='ask-ques-tags' placeholder='e.g (reactjs node.js html)' />
                </label>
            </div>
            <input type= "submit" value="Review your question" className='review-btn'/>
         </form>
       </div>

     </div>
    
  )
}

export default AskQuestion