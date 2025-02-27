import {Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
// import { Navbar, Footer } from './components'
import { Home } from './pages'

function App() { 
  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
