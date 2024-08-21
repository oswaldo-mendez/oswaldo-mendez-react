import { useState, useEffect } from 'react'
import '../App.css'
import Character from '../components/CharacterCard'
import Navbar from '../components/Navbar'
//import RickAndMortyCharacterCard from './components/RickAndMortyCharacterCard'

function character() {
  const [pagina, setPagina] = useState(1)
  const [pag, setPag] = useState()
  const [personajes, setPersonajes] = useState([])
  const [nameFilter, setNameFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('')
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
    
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}&name=${nameFilter}&gender=${genreFilter}&status=${statusFilter}`)
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
    setCambio('ok')
    setPagina(1)
    const url= new URL(window.location.href)
    url.searchParams.set('page', 1)
    window.history.replaceState({},'',url)
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

   const refreshPage = () => {
    
    setPagina(1)
    const url= new URL(window.location.href)
    url.searchParams.set('page', 1) 
    window.history.replaceState({},'',url)
    window.location.reload()
   }

  return (

    <div>
       <div className='header'> <h1 onClick={refreshPage} className='Title' >Rick and Morty</h1>
        {/*
        <RickAndMortyCharacterCard id={1}/>
        */}
        <Navbar /></div>
      <form onSubmit={handleSubmit}>
            <div className='buscador'>
                <input value={nameFilter} onChange={(e) => setNameFilter(e.target.value)}  type="text" placeholder='Search changer name' />
                <input value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}  type="text" placeholder='Select genre' />
                <input value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}  type="text" placeholder='Select status' />
                <button className='filtrarBtn' type="submit">Filtrar</button>
            </div>  
      </form>
      <div className="container2">
        <button className='paginaBtn'  onClick={decrementarContador} >{"<<"}</button>
        <button className='paginaBtn'  onClick={incrementarContador} >{">>"}</button>
      </div>
      
       
        <div className="container">
          {personajes.map((personaje) => (
            <Character key={personaje.id} title={personaje.name} url={personaje.image} genre={personaje.gender} status={personaje.status} />
          ))}
        </div>
      
      <div className="container2">
        <button className='paginaBtn'  onClick={decrementarContador} >{"<<"}</button>
        <button className='paginaBtn'  onClick={incrementarContador} >{">>"}</button>
      </div>
      
     
    </div>
  )
}


export default character;
