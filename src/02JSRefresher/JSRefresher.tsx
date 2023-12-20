import ReactDOM from 'react-dom';
import './JSRefresher.css'
import jsIMG from './js-logo-xs.png'
import App from './scripts/App'
import Exercise2 from './exercises/Exercise2';
// import Exercise1 from './exercises/Exercise1'

export default function JSRefresher() {
  App()
  Exercise2([1, 2, 3])
  return (
    <div>
      <title>JavaScript Refresher</title>
      <link rel="stylesheet" href="JSRefresher.css" />
      {/* <meta charset="UTF-8" /> */}
      {/* <script src="scripts/app.js" type="module"></script> */}


      <header>
        <img src={jsIMG} alt="JavaScript logo" />
        <h1>JavaScript Refresher</h1>
      </header>


      <ul>
        <li>Base Syntax & Rules</li>
        <li>Variables, Values & Operators</li>
        <li>Functions</li>
        <li>Objects</li>
        <li>Arrays</li>
        <li>Control Structures</li>
        <li>Browser APIs & The DOM</li>
        <li>Essential Features Used By React</li>
        <li>Tricky Parts</li>
      </ul>
    </div>
  )
}