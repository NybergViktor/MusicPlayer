import React from "react";
import "./PlayerSettingsStyle.css";

const PlayerSettings = ({
  isPlaying,
  bpm,
  onPlayPause,
  onBpmChange,
  onRestart,
}) => {
  return (
    <div className="music-settings-container">
      <h2 className="settings-title">Music Settings</h2>
      <div className="bpm-input-container">
        <label className="bpm-label">BPM:</label>
        <input
          type="number"
          value={bpm}
          onChange={(e) => onBpmChange(parseInt(e.target.value))}
          className="bpm-input"
        />
      </div>
      <div className="controls-container">
        <button
          className="play-pause-button"
          onClick={() => onPlayPause(!isPlaying)}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button className="restart-button" onClick={onRestart}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default PlayerSettings;
