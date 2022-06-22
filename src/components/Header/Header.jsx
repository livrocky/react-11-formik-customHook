import { NavLink } from 'react-router-dom';
import { useAuthCtx } from '../../store/AuthContext';
import css from './Header.module.css';

function Header() {
  // useContext ir pagal isLoggedin rodom arba nerodom
  const { isUserLoggedIn, logout } = useAuthCtx();

  return (
    <header className={css.header}>
      <nav>
        {isUserLoggedIn && (
          <NavLink className={css.navLink} to='/about'>
            About
          </NavLink>
        )}
        {!isUserLoggedIn && (
          <NavLink className={css.navLink} to='/login'>
            Login
          </NavLink>
        )}
        {!isUserLoggedIn && (
          <NavLink className={css.navLink} to='/register'>
            Register
          </NavLink>
        )}
        {isUserLoggedIn && (
          <NavLink onClick={logout} className={css.navLink} to='/login'>
            Logout
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
