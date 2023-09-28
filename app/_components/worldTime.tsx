'use client'
import { useEffect, useState } from 'react';
import './worldTime.css'

const worldTime = () => {

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
        <div className="worldTimeBody">
            <div>{datetime}</div>
            <div>{dayName}</div>
        </div>
    )
}

export default worldTime;