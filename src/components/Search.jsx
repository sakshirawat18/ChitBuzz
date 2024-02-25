import React from 'react'
import "../styles/Search.css"

const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='find a user' />
            </div>
            <div className="userChat">
                <img src="https://pxbar.com/wp-content/uploads/2023/10/anime-boy-pfp.jpg" alt="" />
                
                <div className="userChatInfo">
                    <span>Anime</span>
                </div>
            </div>
        </div>
    )
}

export default Search
