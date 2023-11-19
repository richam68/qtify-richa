import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import { useEffect, useState } from "react";
import axios from "axios";
import Section from "./Components/Section";
import Accordion from "./Components/Accordion";

let ENDPOINT = "https://qtify-backend-labs.crio.do/";
function App() {
  const [topAlbum, setTopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [value, setValue] = useState(0);

   const delay = (ms) => {new Promise((resolve) => setTimeout(resolve, ms))}

  const topAlbumApi = async () => {
    await axios
      .get(`${ENDPOINT}albums/top`)
      .then(({ data }) => {
        console.log("data", data);
        setTopAlbum(data);
      })
       await delay(1000)
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
      setFilteredDataValues(res.data);
    });
  };

  const makeRequestRetry = async(apiFun) => {
  try{
   await apiFun();
  }catch(error){
    if (error.response && error.response.status === 429){
      console.log("Rate limited, retrying after 5 seconds...");
      await delay(5000); // Wait for 5 seconds and then retry
      await apiFun();
    } else {
      console.error("Error:", error);
    }
  }
  }
  useEffect(() => {
    //topAlbumApi();
    // newAlbumApi()
    // songsAlbum()
    makeRequestRetry(() => topAlbumApi());
    makeRequestRetry(()=> newAlbumApi()) ;
    makeRequestRetry(() => songsAlbum());
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mergingData = [...topAlbum, ...newAlbum, ...songs];

  let generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filterData(songs);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else {
      key = "blues";
    }

    let filteredSongs = songs.filter((songItem) => songItem.genre.key === key);
    filterData(filteredSongs);
  };

  let filterData = (val) => {
    setFilteredDataValues(val);
  };
  useEffect(() => {
    generateSongsData(value);
  }, [value]);

  return (
    <div>
      <Navbar topAlbum={topAlbum} setTopAlbum={setTopAlbum} />
      <HeroSection />
      <Section title="Top Album" type="topAlbum" data={topAlbum} />
      <Section title="New Album" type="newAlbum" data={newAlbum} />
      <Section
        title="Songs"
        type="songs"
        data={filteredDataValues}
        value={value}
        handleChange={handleChange}
      />
      <Accordion />
    </div>
  );
}

export default App;
