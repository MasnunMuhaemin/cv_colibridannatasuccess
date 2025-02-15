import {Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar } from './components'
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
      </Router>
    </>
  )
}

export default App
