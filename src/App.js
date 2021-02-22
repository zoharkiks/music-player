import React, { useRef, useState } from "react";

// Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

// Styles
import "./styles/app.scss";

// Data
import data from "./data";

function App() {
  // Ref
  const audioRef = useRef(null);

  // States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPerc:0
  });
  const[libraryStatus, setLibraryStatus] = useState(false)

  // Handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // Perc Calculate
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)
    const animationPerc = Math.round((roundedCurrent/roundedDuration)*100)
    setSongInfo({ ...songInfo, currentTime: current, duration, animationPerc });
   
  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        setSongs={setSongs}
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
