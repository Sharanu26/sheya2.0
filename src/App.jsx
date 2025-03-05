import React, { useContext } from 'react'
import "./App.css"
import va from "./assets/ai.png"
import speakimg from "./assets/speak.gif"
import aigif from "./assets/aiVoice.gif"
import {CiMicrophoneOn} from "react-icons/ci";
import { datacontext } from './context/UserContest';

function App() {
  let {recognition,speaking,setSpeaking,prompt,response,setPrompt,setResponse}= useContext(datacontext)
 
  return (
    <div className='main'>
      <img src={va} alt="" id="sheya"/>
      <span>I'm 
        Sheya,Your Advanced Virtual Assistant
        </span>
        
        {!speaking?
        <button onClick={()=>{
          setPrompt("listening...")
          setSpeaking(true)
          setResponse(false)
         recognition.start()
        }}>Click here <CiMicrophoneOn /></button> 
        : 
      <div className='response'>
        {!response? <img src={speakimg} alt="" id='speak'/> : 
        <img src={aigif} alt="" id='aigif'/>}
        
        <p>{prompt}</p>
      </div>
      }
        
    </div>
  )
}

export default App