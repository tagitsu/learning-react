import styles from './About.module.scss';

const About = () => {

  return(
    <section className={styles.about}>
      <h1 className={styles.about__title}>About</h1>
      <p className={styles.about__content}>lorem ipsum</p>
    </section>
  )
};

export default About;