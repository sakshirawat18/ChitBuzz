import React from 'react'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="navLogo">ChitBuzz</span>
      <div className="userProfile">
        <img src="https://pxbar.com/wp-content/uploads/2023/10/anime-boy-pfp.jpg" alt="" />
        <span className="username">username</span>
        <button className="logoutBTN">logout</button>
      </div>
    </div>
  )
}

export default Navbar
