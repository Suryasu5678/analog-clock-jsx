import React,{useState,useEffect} from 'react'
import "./App.css";

const AnalogClock = () => {
  const [time, SetTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      SetTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const hours = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;
  const minutes = time.getMinutes() * 6;
  const seconds = time.getSeconds() * 6;

  return (
    <div className="clock">
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "133px",
          fontSize: "10px",
          marginLeft: "10px",
          fontFamily: "Source Sans Pro, sans-serif",
        }}
      >
        FastTrack ⌚
      </h1>
      <div
        className="hour-hand"
        style={{ transform: `rotate(${hours}deg)` }}
      ></div>
      <div
        className="minute-hand"
        style={{ transform: `rotate(${minutes}deg)` }}
      ></div>
      <div
        className="second-hand"
        style={{ transform: `rotate(${seconds}deg)` }}
      ></div>
      <div className="center"></div>
      <span className="twelve">12</span>
      <span className="one">1</span>
      <span className="two">2</span>
      <span className="three">3</span>
      <span className="four">4</span>
      <span className="five">5</span>
      <span className="six">6</span>
      <span className="seven">7</span>
      <span className="eight">8</span>
      <span className="nine">9</span>
      <span className="ten">10</span>
      <span className="eleven">11</span>
    </div>
  );
};

export default AnalogClock