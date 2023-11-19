import React from "react";
import SearchBox from "../SearchBox";
import Button from "../Button";
import "./navbar.css";

export default function Navbar({topAlbum, setTopAlbum}) {
  return (
    <div className="navbar">
      <img src="Group 1.png" alt="logo" className="logo" />
      <SearchBox topAlbum={topAlbum} setTopAlbum={setTopAlbum}/>
      <Button>Give Feedback</Button>
    </div>
  );
}
