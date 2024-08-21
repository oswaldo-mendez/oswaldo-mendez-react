import Navbar from '../components/Navbar'
import  '../App'
import portada from '../assets/portada.jpg'


function Home() {
    
  return (
    <>
        <div className='header'>
          <h1 className='Title' >Rick and Morty</h1>
          <Navbar /></div>
          <div className='imgHome'>
              <img className='imagen' src={portada} alt="" />
              <h2 className='subTitle'>Sobre Rick y Morty</h2>
              <b className='ref'>Rick y Morty es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon para Adult Swim. La serie sigue las aventuras de un científico alcohólico, Rick, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica familiar y los viajes espaciales intergalácticos. Actualmente la serie cuenta con seis temporadas.</b>

          </div>
        
    </>
  )
}


export default Home