import Container from "../Container/Container";
import styles from './NavBar.module.scss';

const NavBar = () => {
  return(
    <nav className={styles.nav}>
      <Container>
        <div className={styles.nav__bar}>
          <i className={styles.icon + ' fa fa-tasks'}></i>
          <ul className={styles.nav__menu}>
            <li><a href="#">home</a></li>
            <li><a href="#">favorite</a></li>
            <li><a href="#">about</a></li>
          </ul>
        </div>
        
      </Container>
    </nav>
  )
};

export default NavBar;