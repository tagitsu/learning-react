import styles from './Favorite.module.scss';

const Favorite = () => {

  return(
    <section className={styles.favorite}>
      <h1 className={styles.favorite__title}>Favorite</h1>
      <p className={styles.favorite__content}>lorem ipsum</p>
    </section>
  )
};

export default Favorite;