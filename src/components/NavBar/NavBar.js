import Container from "../Container/Container";
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <nav className={styles.nav}>
      <Container>
        <div className={styles.nav__bar}>
          <i className={styles.icon + ' fa fa-tasks'}></i>
          <ul className={styles.nav__menu}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorite">Favorite</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        
      </Container>
    </nav>
  )
};

export default NavBar;