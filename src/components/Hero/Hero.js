import styles from './Hero.module.scss';

const Hero = () => {

  return (
    <section className={`${styles.Hero} d-flex justify-content-center align-items-center`} id={'top'}>
      <div className={`${styles.Content}`}>

        {/*<h1 className={styles.Title}>*/}
        <h1 className={`display-1 ${styles.Title}`}>
          The San Francisco Golden Gate Classic
        </h1>

        <h2>
          An{' '}
          <span className={'fw-bold'}>IGBO</span>
          {' '}bowling tournament
        </h2>

        <h3>
          February 16-18, 2024
        </h3>

        <h4>
          Presidents Day Weekend
        </h4>

        <p>
          A San Francisco institution for decades, the Golden Gate Classic brings together bowlers from across the country, embodying the spirit of Unity, Fellowship, and Inclusion that define IGBO.
        </p>
      </div>

      <div className={styles.BackgroundBasis}/>
      <div className={styles.BackgroundImage}/>
    </section>
  )
}

export default Hero;
