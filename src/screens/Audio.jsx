import React, { useState, useRef } from 'react';
import './AudioPlayer.css';

function AudioPlayer({ song }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <div className="audio-player">
      <div className="player-info">
        {song && <img src={song.cover} className="song-cover" alt="Song Cover" />}
      </div>
      <div className="player-controls">
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(currentTime / audioRef.current.duration) * 100}%` }}
        />
      </div>
      <div className="song-details">
        <div className="song-text">
          <p className="song-artist">{song?.artist}</p>
          <p className="song-name">{song?.title}</p>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={song?.audioUrl}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
}

export default AudioPlayer;
