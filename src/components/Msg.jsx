import React from 'react'
import "../styles/Messages.css"

const Msg = () => {
    return (
        <div className='msg owner'>
            <div className="msgInfo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRg6bol1-qcHXpB-F2spuBdfwci0MAOncnA&usqp=CAU" alt="" />
                <span>just now</span>
            </div>
            <div className="msgContent">
                <p>hello!</p>
                <img src="https://images.ctfassets.net/h6goo9gw1hh6/4uZMPT7pEQxvowHt980pXI/093596e039b95eb45570ff991a98a044/Tell_Me_More__Meme_Example.jpg?w=1080&h=1080&fl=progressive&q=70&fm=jpg" alt="" />
            </div>
        </div>
    )
}

export default Msg
