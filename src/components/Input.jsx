import React from 'react'
import "../styles/Input.css"
import Attach from "../assets/attach.png"
import Img from "../assets/img.png"


const Input = () => {
  return (
    <div className='inputContainer'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" id="file" style={{ display: 'none' }} />
        <label htmlFor="file"><img src={Img} alt="" /></label>
        <button className="sendBTN">Send</button>
      </div>
    </div>
  )
}

export default Input
