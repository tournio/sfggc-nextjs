import Spotlight from "../Spotlight/Spotlight";

import styles from './Hero.module.scss';
import RegisterCTA from "../RegisterCTA/RegisterCTA";

const Hero = () => {

  return (
    <section className={`${styles.Hero}`}>
      <div className={`${styles.Content}`}>

        <h1 className={`display-1 ${styles.Title}`}>
          The San Francisco Golden Gate Classic
        </h1>

        <h2 className={`display-2 ${styles.Subtitle}`}>
          An{' '}
          <span className={'fw-bold'}>IGBO</span>
          {' '}bowling tournament
        </h2>

        <h3 className={`display-3 ${styles.Dates}`}>
          February 14-16, 2025
        </h3>

        <h4 className={`display-4 ${styles.Weekend}`}>
          Presidents Day Weekend
        </h4>

        <RegisterCTA/>
      </div>

      <Spotlight/>
    </section>
  )
}

export default Hero;
