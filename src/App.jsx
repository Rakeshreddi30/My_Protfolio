import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Footer from './Footer'
import Hobbies from './Hobbies'

function App() {

  return (
<>
<Navbar/>
<Main/>
<About/>
<Services/>
<Projects/>
<Hobbies/>
<Footer/>
</>
  )
}

export default App
