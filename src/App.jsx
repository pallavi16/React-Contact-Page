import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Contact from './components/ContactSection/Contact'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='container'>
    <Navigation />
    <main className='main_container'>
       <Contact />
       <ContactForm />
    </main>
  </div>
        )
}

export default App
