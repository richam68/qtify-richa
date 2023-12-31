import { ReactComponent as SearchIcon } from "./search-icon.svg";
import "./searchbox.css";
import { useEffect, useState } from "react";
import SearchAlbumPage from "../SearchAlbumPage";

export default function SearchBox({ topAlbum, setTopAlbum }) {
  const [title, setTitle] = useState("");
  const [filterSearch, setFilterSearch] = useState(null);
  const [popup, setpopup] = useState(false);

  const handleChange = (e) => {
    setTitle(e.target.value);
    setpopup(true);

    let filter = topAlbum.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilterSearch(filter);
  };

  // const searchApi = async () => {
  //   // console.log("search api function");
  //   let res = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
  //   setFilterSearch(res.data);
  // };

  useEffect(() => {
    // console.log("filter serach");
    if (!title) {
      setFilterSearch(topAlbum);
    }
  }, [title, topAlbum]);

  return (
    <div className="search-wrapper">
      <form className="search">
        <input
          type="text"
          placeholder="Search a album of you choice"
          className="input-box"
          value={title}
          onChange={handleChange}
        />
        <button className="search-icon" type="submit">
          <SearchIcon />
        </button>
      </form>
      {popup && (
        <>
          {title ? (
            <div className="popup">
              <SearchAlbumPage filterSearch={filterSearch} />
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
