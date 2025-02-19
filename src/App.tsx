import {Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { Header } from './sections'
import { Home } from './pages'

function App() { 
  return (
    <>
      <Router>
        <Navbar />
        <Header />
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
