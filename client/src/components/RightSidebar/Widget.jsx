import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/icon.svg'
const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width={18}/>
          <p>Observeability is the key to the Future of<br/>software (and your DevOps career)</p>
        </div>
        <div className='right-sidebar-div-2'>
        <img src={pen} alt="pen" width={18}/>
          <p>Podcast 374 : How valuable is your screen name ?</p>
        </div>
        </div>

        <h4>Featured On Meta</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={comment} alt="pen" width={18}/>
          <p>Review Queue WorkFlows- Final release... </p>
        </div>
        <div className='right-sidebar-div-2'>
        <img src={comment} alt="pen" width={18}/>
          <p>Please Welcome Valued Associates :#958-V2Blast#959-SpencerG</p>
        </div>
        <div className='right-sidebar-div-2'>
        <img src={blacklogo} alt="pen" width={18}/>
          <p>Outdated Answers : accepted answer is now unpinned on Stack Overflow</p>
        </div>
        </div>

        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <p>38</p>
          <p>Why was this spam tag declined. yet<br/>the questions marked as spam? </p>
        </div>
        <div className='right-sidebar-div-2'>
        <p>20</p>
          <p>What is the best Course of action when a user has high enough rep to..</p>
        </div>
        
        <div className='right-sidebar-div-2'>
          <p>14</p>
          <p> Is A Link to the "how to ask " help page a useful comment ?</p>
        </div>

        </div>
    </div>
  )
}

export default Widget