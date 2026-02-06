import "./Home.css"
import Data from "./Data";
export default function Home() {
  const userId= 25082003;
  return (
    <>
    <div class="d">
      <Data id={userId} />
      <h1 id ="h">Home Page </h1>
      <p id = "h">Programming Langauge</p>
      <ol>
        <li>C</li><li>CPP</li>
        <li>JAVA</li><li>PYTHON</li><li>SQL</li>
      </ol>
      </div>
    </>
  )
}


