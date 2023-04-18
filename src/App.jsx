import { BrowserRouter } from 'react-router-dom'
import { Hero, About, Experience, Tech, Works, Contact, StarsCanvas, NavBar } from './components'
function App () {
  return (
    <BrowserRouter>
      <div className='bg-primary relative z-0'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <NavBar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
