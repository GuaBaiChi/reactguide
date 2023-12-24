
import reactImg from '../../react-core-concepts.png'
import './Header.css'

type Max = number;

const reactDescriptions: string[] = ['Fundamental', 'Crucial', 'Core'];
function getRandomInt(max: Max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[getRandomInt(reactDescriptions.length)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}