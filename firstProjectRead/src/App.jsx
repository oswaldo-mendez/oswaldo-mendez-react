
import spiderman from './assets/spiderman.jpg'
import './App.css'

function App() {


  return (
    < >
      <div>
        <h1>CINEPOLIS</h1>
      </div>
      <div className='film'>
        <img src= {spiderman} className='img'/>
        <p>Spiderman</p>
      </div>
    </>
  )
}

export default App
