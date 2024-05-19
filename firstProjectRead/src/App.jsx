
import spiderman from './assets/spiderman.jpg'
import './App.css'

function App() {


  return (
    < >
      <div>
        <h1 className='Title'>CINEPOLIS</h1>
      </div>
      <div className="contenedor">
        <div className='film'>
          <img src= {spiderman} className='image'/>
          <div className="capa">
          <h2>Spiderman</h2>
          <p>Luego de sufrir la picadura de una araña genéticamente modificada, un estudiante de secundaria tímido y torpe adquiere increíbles capacidades como arácnido. Pronto comprenderá que su misión es utilizarlas para luchar contra el mal y defender a sus vecinos</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
