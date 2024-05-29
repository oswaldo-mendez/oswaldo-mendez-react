import { useState, useEffect } from 'react'
import './App.css'
import Character from './components/CharacterCard'
import RickAndMortyCharacterCard from './components/RickAndMortyCharacterCard'


function App() {

  const [pagina, setPagina] = useState(1)
  const [pag, setPag] = useState()
  const [personajes, setPersonajes] = useState([])




  /*useEffect( () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((response) => response.json())
      .then((result) => setPersonajes(result.results))
      //.then((resp) => setPag(resp.info))
  }, [pagina])


    console.log(pag)
    const incrementarContador = () => {
      setPagina(pagina + 1)
      document.querySelector('h1').scrollIntoView({ behavior: 'smooth' });
    }
    const decrementarContador = () => {
      if (pagina>=2){
        setPagina(pagina - 1)
      }else{
        setPagina=1}
      document.querySelector('h1').scrollIntoView({ behavior: 'smooth' });
    }*/
  return (

    <div>
      <h1 className='Title' >Rick and Morty</h1>
      {
      <RickAndMortyCharacterCard id={1}/>
      }
       {/* 
         <div className="container">
          {personajes.map((personaje) => (
            <Character key={personaje.id} title={personaje.name} url={personaje.image} genre={personaje.gender} status={personaje.status} />
          ))}
      </div>
      <div className="container2">
        <button className='paginaBtn'  onClick={decrementarContador} >pagina anterior</button>
        <button className='paginaBtn'  onClick={incrementarContador} >siguiente pagina</button>
      </div>
      */}
     
    </div>
  )
}


export default App;
