import Navbar from '../components/Navbar'
import  '../App'
import portada from '../assets/portada.jpg'


function Home() {
    
  return (
    <>
        <h1 className='Title' >Rick and Morty</h1>
        <Navbar />
        <div className='imgHome'>
            <img className='imagen' src={portada} alt="" />
        </div>
    </>
  )
}


export default Home