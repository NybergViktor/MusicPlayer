import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import PlayerSettings from "./Components/PlayerSettings/PlayerSettings";
import PlayerTable from "./Components/PlayerTable/PlayerTable";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [restart, setRestart] = useState(false);

  const handlePlayPause = (playing) => {
    setIsPlaying(playing);
    if (playing) {
      setRestart(false);
    }
  };

  const handleBpmChange = (newBpm) => {
    setBpm(newBpm);
  };

  const handleRestart = () => {
    setRestart(true);
    setIsPlaying(true);
  };

  return (
    <div className="main">
      <div className="headerContainerApp">
        <Header></Header>
      </div>
      <div className="playerContainerApp">
        <PlayerSettings
          isPlaying={isPlaying}
          bpm={bpm}
          onPlayPause={handlePlayPause}
          onBpmChange={handleBpmChange}
          onRestart={handleRestart}
        />

        <PlayerTable isPlaying={isPlaying} bpm={bpm} restart={restart} />
      </div>
    </div>
  );
};

export default App;
