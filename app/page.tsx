'use client'
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  
  const [datetime, setdatetime] = useState("");
  const [dayName, setdayname] = useState("");

  var [timer, settimer] = useState();

  useEffect(() => {
    setInterval(() => {
      //Current time
      var d = new Date();
      var datetext = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
      datetext = d.toTimeString().split(' ')[0]
      var hours = d.getHours()
      var ampm = (hours >= 12) ? "PM" : "AM";
      var day = d.getDay()
      var dayName = day == 1? "Monday": day ==2? "Tuesday": day == 3? "Wednesday": day == 4? "Thursday": day == 5? "Friday": day == 6? "Saturday": day == 7? "Sunday": "Undefined";
      setdatetime(datetext +" "+ ampm);
      setdayname(dayName)

      //Pomodoro timer
      
    },1000)
  },[]);

  useEffect(() => {
    setInterval(() => {
      var timer = 6000 * 25
      timer -= 1;
      settimer(timer)
    },1000)
  },[]);
  
  return (
    <main>
      <div>
        <div className="image">
          <button className="changeImage">set image</button>
        </div>
        <div className="container">
          <h1>Simple Second Brain</h1>
          <hr></hr>
          <div className="firstSet">
            <div>Task progress</div>
            <div>Weather</div>
            <div className="currentTime">
              <div>{datetime}</div>
              <div>{dayName}</div>
            </div>
          </div>
          <hr></hr>
          <div className="secondSet">
            <div className="tasks">
              <p>Tasks here</p>
            </div>
            <div className="Pomodoro">
              <p>Focus</p>
              <p>Short Break</p>
              <p>Long Break</p>
              <p>{timer}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
