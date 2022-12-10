import PageTitle from '../PageTitle/PageTitle';
import styles from './NotFound.module.scss';

const NotFound = () => {

  return(
    <section className={styles.notFound}>
      <PageTitle>404 not found</PageTitle>
      <p className={styles.notFound__content}></p>
    </section>
  )
};

export default NotFound;