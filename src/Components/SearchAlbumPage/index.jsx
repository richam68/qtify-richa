import React from 'react'
import "./searchAlbum.css"
const SearchAlbumPage = ({filterSearch}) => {
    // console.log(">>>", filterSearch)
  return (
    <div className='album-container'>
{filterSearch.map((item, index) => {
    console.log("item in search album", item)
return(
    <div key={index} className='album-section'>
      <div className='album-start-item'>
      <img src={item.image} alt="album" width={40} height={40}/>
      <p>{item.title}</p>
      </div>
      <p className='album-follow'>{item.follows} Follows</p>
      </div>
)})}
    </div>
  )
}

export default SearchAlbumPage