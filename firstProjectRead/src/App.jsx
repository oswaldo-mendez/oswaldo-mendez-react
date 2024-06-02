import { useState, useEffect } from 'react'
import './App.css'
import Character from './components/CharacterCard'

//import RickAndMortyCharacterCard from './components/RickAndMortyCharacterCard'

function App() {
  const [pagina, setPagina] = useState(1)
  const [pag, setPag] = useState()
  const [personajes, setPersonajes] = useState([])
  const [nameFilter, setNameFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [cambio, setCambio] = useState('')
 

  useEffect( () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
    .then((response) => response.json())
    .then((result) => {
      setPersonajes(result.results)
      setPag(result.info)
    })     
  }, [pagina])
  

  useEffect (() => {
    const url= new URL(window.location.href)
    const params= new URLSearchParams(url.search)
    const page= params.get('page')
    if(page){
      setPagina(parseInt(page))
    }
  }, [])

  useEffect( () => {
    
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}&name=${nameFilter}&gender=${genreFilter}`)
    .then((response) => response.json())
    .then((result) => {
      setPersonajes(result.results)
      setPag(result.info)
    })
    console.log(pag)
    console.log(personajes)
}, [cambio,pagina])

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('ok')
    setCambio('ok')
  }
 
//botones para incrementar o decrementar las paginas
  const incrementarContador = () => {
    const url= new URL(window.location.href)

    if (parseInt(pagina)==pag.pages) {
      url.searchParams.set('page', 1)
      window.history.replaceState({},'',url)
      setPagina(1);
    }
    if (parseInt(pagina) != pag.pages){
      url.searchParams.set('page', parseInt(pagina)+1)
      window.history.replaceState({},'',url)
      setPagina(parseInt(pagina)+1)
    }
    document.querySelector('h1').scrollIntoView({ behavior: 'smooth' });
  }
  const decrementarContador = () => {
    const url= new URL(window.location.href)
    if (parseInt(pagina)>=2) {
      url.searchParams.set('page', parseInt(pagina)-1)
      window.history.replaceState({},'',url)
      setPagina(parseInt(pagina)-1)
    }
    if (parseInt(pagina)==1) {
      url.searchParams.set('page', pag.pages)
      window.history.replaceState({},'',url)
      setPagina(pag.pages);
    }
    document.querySelector('h1').scrollIntoView({ behavior: 'smooth' });
  }

  return (

    <div>
      <h1 className='Title' >Rick and Morty</h1>
      {/*
      <RickAndMortyCharacterCard id={1}/>
      */}
      <form onSubmit={handleSubmit}>
            <div>
                <input value={nameFilter} onChange={(e) => setNameFilter(e.target.value)}  type="text" placeholder='Search changer name' />
            </div>
            <div>
                <input value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}  type="text" placeholder='Select genre' />
            </div>

            <button type="submit">Buscar</button>

      </form>
       
        <div className="container">
          {personajes.map((personaje) => (
            <Character key={personaje.id} title={personaje.name} url={personaje.image} genre={personaje.gender} status={personaje.status} />
          ))}
        </div>
      {
      <div className="container2">
        <button className='paginaBtn'  onClick={decrementarContador} >pagina anterior</button>
        <button className='paginaBtn'  onClick={incrementarContador} >siguiente pagina</button>
      </div>
        }
     
    </div>
  )
}


export default App;
