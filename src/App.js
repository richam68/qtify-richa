import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import { useEffect, useState } from "react";
import axios from "axios";
import Section from "./Components/Section";
import SectionFilter from "./Components/SectionFilter";
import Accordion from "./Components/Accordion";

let ENDPOINT = "https://qtify-backend-labs.crio.do/";
function App() {
  const [topAlbum, setTopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genre, setGenre] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);

  const topAlbumApi = async () => {
    await axios
      .get(`${ENDPOINT}albums/top`)
      .then(({ data }) => {
        console.log("data", data);
        setTopAlbum(data);
      })
      .catch((error) => {
        console.error("Error fetching top albums:", error);
      });
  };

  const newAlbumApi = async () => {
    await axios
      .get(`${ENDPOINT}albums/new`)
      .then(({ data }) => {
        setNewAlbum(data);
      })
      .catch((error) => {
        console.error("Error fetching new albums:", error);
      });
  };
  //all songs
  const songsAlbum = async () => {
    await axios.get(`${ENDPOINT}songs`).then((res) => {
      setSongs(res.data);
      setFilteredSongs(res.data);
    });
  };
  const genreType = async () => {
    await axios.get(`${ENDPOINT}genres`).then((res) => {
      setGenre([
        {
          key: "all",
          label: "All",
        },
        ...res.data.data,
      ]);
    });
  };
  useEffect(() => {
    topAlbumApi();
    newAlbumApi();
    songsAlbum();
    genreType();
  }, []);
  return (
    <div>
      <Navbar topAlbum={topAlbum} setTopAlbum={setTopAlbum} />
      <HeroSection />
      <Section title="Top Album" type="topAlbum" data={topAlbum} />
      <Section title="New Album" type="newAlbum" data={newAlbum} />
      <SectionFilter
        title="Songs"
        type="Songs"
        data={filteredSongs}
        genre={genre}
        executeFilterSongs={(genre) => {
          if (genre === "all") {
            setFilteredSongs(songs);
          } else {
            setFilteredSongs(songs.filter((song) => song.genre.key === genre));
          }
        }}
      />
      <Accordion />
    </div>
  );
}

export default App;
