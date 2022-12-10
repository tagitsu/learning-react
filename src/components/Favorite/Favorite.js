import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {

  return(
    <section className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.favorite__content}>lorem ipsum</p>
    </section>
  )
};

export default Favorite;