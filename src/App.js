import './App.css';
import Navbar from "./Components/Navbar"
import HeroSection from './Components/HeroSection';
import { useEffect, useState } from "react";
import axios from "axios";
import Section from './Components/Section';

let ENDPOINT = "https://qtify-backend-labs.crio.do/"
function App() {
  const[topAlbum, setTopAlbum] = useState([]);
  const[newAlbum, setNewAlbum] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`)
    .then(({data}) => {
      // console.log(data)
      setTopAlbum(data)
    })
    .catch(error => {
      console.error("Error fetching top albums:", error);
    });

    axios.get(`${ENDPOINT}albums/new`)
    .then(({data}) => {
      // console.log(data)
      setNewAlbum(data)
    })
    .catch(error => {
      console.error("Error fetching new albums:", error);
    });
  }, []);

  // async function albumTop(){
  //  await axios.get(`${ENDPOINT}albums/top`)
  //   .then(res => {
  //     setTopAlbum(res.data)
  //   })
  //   .catch(err => {
  //     console.error(err); 
  //   })
  // };

  // async function albumNew(){
  //    await axios.get(`${ENDPOINT}albums/new`)
  //     .then((res)=> {
  //         setNewAlbum(res.data)
  //     })
  //     .catch(err => {
  //         console.error(err); 
  //       })
  // };
  return (
    <div>
    <Navbar />
    <HeroSection/>
    <Section title="Top Album" data={topAlbum} />
    <Section title="New Album" data={newAlbum} />
    </div>
  );
}

export default App;
