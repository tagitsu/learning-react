import Container from "../Container/Container";
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <nav className={styles.nav}>
      <Container>
        <div className={styles.nav__bar}>
          <i className={styles.icon + ' fa fa-tasks'}></i>
          <ul className={styles.nav__menu}>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
          </ul>
        </div>
        
      </Container>
    </nav>
  )
};

export default NavBar;