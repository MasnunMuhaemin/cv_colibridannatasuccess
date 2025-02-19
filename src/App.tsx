import {Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { Home } from './pages'

function App() { 
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
