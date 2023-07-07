import { useEffect, useRef, useState } from "react"
import playIcon from "./assets/play.svg"
import pauseIcon from "./assets/pause.svg"
import audioFile from "./assets/audio.mp3"
import "./App.css"

function App() {
  const audioRef = useRef()

  const [playStatus, setPlayStatus] = useState("paused")

  const handlePlayStatus = () => {
    if (playStatus == "paused") {
      audioRef.current.play()
      setPlayStatus("playing")
    } else {
      audioRef.current.pause()
      setPlayStatus("paused")
    }
  }

  return (
    <div>
      <h1>Audio Player App</h1>
      <div>
        <div className="audio-player">
          <button onClick={handlePlayStatus}>
            <img
              src={playStatus === "playing" ? pauseIcon : playIcon}
              alt={"Play"}
            />
          </button>
          <audio id="audio" ref={audioRef}>
            <source src={audioFile} />
          </audio>
        </div>
      </div>
    </div>
  )
}

export default App
