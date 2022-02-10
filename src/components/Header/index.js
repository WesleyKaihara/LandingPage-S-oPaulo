import './style.css';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className='header'>
      <h1 className='header_title'><Link to="top" spy={true} smooth={true} offset={-100} duration={1000} >São Paulo</Link></h1>
      <nav className='header_menu_content'>
        <ul className='header_menu'>
          <li className='header_menu_item'><Link to="pontosturisticos" spy={true} smooth={true} offset={-100} duration={1000} >Pontos turísticos</Link></li>
          <hr />
          <li className='header_menu_item'><Link to="dados" spy={true} smooth={true} offset={-400} duration={1000} >Dados</Link></li>
          <hr />
          <li className='header_menu_item'><Link to="historia" spy={true} smooth={true} offset={-90} duration={1000} >História</Link></li>
        </ul>
      </nav>
    </header>
  )
}