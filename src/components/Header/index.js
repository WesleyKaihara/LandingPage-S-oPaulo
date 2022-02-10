import './style.css';

export default function Header() {
  return (
    <header className='header'>
      <h1 className='header_title'>São Paulo</h1>
      <nav className='header_menu_content'>
        <ul className='header_menu'>
          <li className='header_menu_item'>Pontos turísticos</li>
          <hr />
          <li className='header_menu_item'>Dados</li>
          <hr />
          <li className='header_menu_item'>História</li>
        </ul>
      </nav>
    </header>
  )
}