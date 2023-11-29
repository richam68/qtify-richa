import React from "react";
import "./searchAlbum.css";

const SearchAlbumPage = ({ filterSearch }) => {
  return (
    <>
      {filterSearch.map((item, index) => {
        return (
          <div key={item.id} className="album-items">
            <div className="image-wrapper">
              <img src={item.image} alt="album" />
            </div>
            <div className="title-wrapper">
              <p className="title">{item.title}</p>
              <p>{item.songs.artists}</p>
            </div>
            <div className="follows-wrapper">{item.follows} Follows</div>
          </div>
        );
      })}
    </>
  );
};

export default SearchAlbumPage;
