'use client'
import WorldTime from "./_components/worldTime"
import Timer from "./_components/timer";
import Weather from "./_components/weather";
import ProgressBar from "./_components/progressbar";

export default function Home() {

  return (
    <main>
      <div>
        <div className="image">
          <button className="changeImage">Change Theme</button>
        </div>
        <div className="container">
          <h1 className="pageTitle">simple second brain</h1>
          <hr></hr>
          <div className="firstSet">
            <div><ProgressBar/></div>
            <div><Weather/></div>
            <div><WorldTime/></div>
          </div>
          <hr></hr>
          <div className="secondSet">
            <div>Habit tracker maybe</div>
            <div>Tasks with slideable in the middle - Separates important from non-important, the slide is used to hide one of both and automatically sticks to the side you drag it to, or it reformats when dragged</div>
            <div>Reminders - these are push notifications that the user can set up</div>
          </div>
          <div className="thirdSet">
            <div className="tasks"><p>Tasks here</p></div>
            <Timer/>
          </div>
        </div>
      </div>
    </main>
  )
}
