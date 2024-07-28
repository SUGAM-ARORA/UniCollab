import React, { useState, useEffect } from "react";
import { FaRegClock, FaMicrophone, FaSave, FaStop, FaPlay } from "react-icons/fa";

const Stopwatch = ({ onClose }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [isMicrophoneOn, setIsMicrophoneOn] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setIsMicrophoneOn(true); // Turn on microphone when starting
    } else {
      setIsMicrophoneOn(false); // Turn off microphone when stopping
    }
  };

  const handleSave = () => {
    if (isRunning || time === 0) return; // Prevent saving while recording is running or if no time is recorded
    setTime(0);
    alert("Recording saved successfully!");
  };

  const toggleMicrophone = () => {
    if (isRunning) {
      setIsMicrophoneOn(!isMicrophoneOn);
    }
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-header">
        <FaRegClock size={30} />
        <button onClick={onClose}>X</button>
      </div>
      <div className="stopwatch-time">{time}s</div>
      <div className="stopwatch-controls">
        <button onClick={handleStartStop}>
          {isRunning ? <FaStop size={30} /> : <FaPlay size={30} />}
        </button>
        <button onClick={toggleMicrophone}>
          <FaMicrophone size={30} color={isMicrophoneOn ? "red" : "gray"} />
        </button>
        <button onClick={handleSave}>
          <FaSave size={30} />
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
