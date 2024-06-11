import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './pages/home'
import Character from './pages/Character'
import Episode from './pages/Episode'
import './App.css'


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Character" element={<Character />} />
        <Route path="/Episode" element={<Episode />} />
      </Routes>
      
    </Router>
  )
}


export default App