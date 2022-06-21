import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <nav>
        <NavLink className={css.navLink} to='/about'>
          About
        </NavLink>
        <NavLink className={css.navLink} to='/login'>
          Login
        </NavLink>
        <NavLink className={css.navLink} to='/register'>
          Register
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
