import Logo from './Logo';
import '../styles/Navbar/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Logo />
      </div>

      <ul className="navbar__center">
        <li>
          <a href="#about" className="navbar__link title">Acerca de Nosotros</a>
        </li>
        <li>
          <a href="#categories" className="navbar__link title">Categorías</a>
        </li>
      </ul>

      <div className="navbar__right">
        <button className="navbar__icon" aria-label="Buscar">🔍</button>
        <button className="navbar__icon" aria-label="Carrito">🛒</button>
        <button className="navbar__icon" aria-label="Cuenta">👤</button>
      </div>
    </nav>
  );
}

export default Navbar;
