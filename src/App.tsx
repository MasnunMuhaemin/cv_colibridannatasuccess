import {Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar } from './components'
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
      </Router>
    </>
  )
}

export default App
