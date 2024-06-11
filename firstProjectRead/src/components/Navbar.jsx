import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container3' >
        <nav>
          <ul className='gridContainer3'>
            <ol><Link to="/">Home</Link></ol>
            <ol><Link to='/Character'>Character</Link></ol>
            <ol><Link to='/Episode'>Episode</Link></ol>
          </ul>
        </nav>
      </div>
    )
}

export default Navbar