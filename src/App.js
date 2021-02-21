import React,{useState} from "react"
// Components
import Player from "./components/Player"
import Song from "./components/Song"
import Library from "./components/Library"
// Styles
import "./styles/app.scss" 

// Data
import data from "./util"

function App() {
// States
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[2])
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
     <Song currentSong={currentSong}/>
     <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/> 
  <Library songs={songs}/>
  </div>
  );
  }

export default App;
