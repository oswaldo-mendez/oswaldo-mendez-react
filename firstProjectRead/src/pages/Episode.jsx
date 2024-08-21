import Navbar from '../components/Navbar'

import { useState, useEffect } from 'react'
import '../App.css'
import Episodio from '../components/EpisodeCard'


function Episode() {
    const [pagina, setPagina] = useState(1)
    const [pag, setPag] = useState()
    const [episodios, setEpisodios] = useState([])
    
    useEffect( () => {
        fetch(`https://rickandmortyapi.com/api/episode?page=${pagina}`)
        .then((response2) => response2.json())
        .then((info) => {
          setEpisodios(info.results)
          setPag(info.info)
        })     
    }, [pagina])
    console.log(episodios)
    console.log(pag)
    useEffect (() => {
      const url= new URL(window.location.href)
      const params= new URLSearchParams(url.search)
      const page= params.get('page')
      if(page){
        setPagina(parseInt(page))
      }
    }, [])

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
    <>
        <div className='header'><h1 onClick={refreshPage} className='Title' >Rick and Morty</h1>
        <Navbar /></div>
      <div className="container2">
        <button className='paginaBtn'  onClick={decrementarContador} >{"<<"}</button>
        <button className='paginaBtn'  onClick={incrementarContador} >{">>"}</button>
      </div>

      <div className="container">
        {episodios.map((episodio) => (
          <Episodio key={episodio.id} title={episodio.name}  date={episodio.air_date} epi={episodio.episode} />
        ))}
      </div>
      <div className="container2">
        <button className='paginaBtn'  onClick={decrementarContador} >{"<<"}</button>
        <button className='paginaBtn'  onClick={incrementarContador} >{">>"}</button>
      </div>

    </>
  )
}


export default Episode