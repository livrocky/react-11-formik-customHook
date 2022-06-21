import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
  // useContext ir pagal isLoggedin rodom arba nerodom
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
        <NavLink className={css.navLink} to='/register'>
          Logout
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
