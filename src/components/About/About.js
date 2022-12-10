import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

const About = () => {

  return(
    <section className={styles.about}>
      <PageTitle>About</PageTitle>
      <p className={styles.about__content}>lorem ipsum</p>
    </section>
  )
};

export default About;