import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import FavoriteColumn from '../FavoriteColumn/FavoriteColumn';

const Favorite = () => {

  return(
    <section className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <FavoriteColumn />
    </section>
  )
};

export default Favorite;