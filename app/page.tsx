'use client'
import { useEffect } from "react";
import { useState } from "react";
import Timer from "./_components/timer";

export default function Home() {
  
  const [datetime, setdatetime] = useState("")
  const [dayName, setdayname] = useState("")

  useEffect(() => {
    setInterval(() => {
      //Current time
      var d = new Date()
      var datetext = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
      datetext = d.toTimeString().split(' ')[0]
      var hours = d.getHours()
      var ampm = (hours >= 12) ? "PM" : "AM";
      var day = d.getDay()
      var dayName = day == 1? "Monday": day ==2? "Tuesday": day == 3? "Wednesday": day == 4? "Thursday": day == 5? "Friday": day == 6? "Saturday": day == 7? "Sunday": "Undefined";
      setdatetime(datetext +" "+ ampm)
      setdayname(dayName)
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
          <div className="secondSet">
            <div className="tasks">
              <p>Tasks here</p>
            </div>
            <Timer/>
          </div>
        </div>
      </div>
    </main>
  )
}
