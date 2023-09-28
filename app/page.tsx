'use client'
import WorldTime from "./_components/worldTime"
import Timer from "./_components/timer";
import Weather from "./_components/weather";

export default function Home() {

  return (
    <main>
      <div>
        <div className="image">
          <button className="changeImage">set image</button>
        </div>
        <div className="container">
          <h1 className="pageTitle">simple second brain</h1>
          <hr></hr>
          <div className="firstSet">
            <div>Task progress</div>
            <div><Weather/></div>
            <div><WorldTime/></div>
          </div>
          <hr></hr>
          <div className="secondSet">
            <div className="tasks"><p>Tasks here</p></div>
            <Timer/>
          </div>
        </div>
      </div>
    </main>
  )
}
