import Image from "next/image";

import bridgeImage from '../../images/sf/ggb-vertical-fullsize.jpg';

import styles from './Hero.module.scss';

const Hero = () => {

  return (
    <section className={`${styles.Hero} d-flex justify-content-center align-items-center`} id={'top'}>
      <div className={styles.Background}>
        <Image src={bridgeImage}
               alt={"Golden Gate Bridge"}
               placeholder={"blur"}
               quality={100}
               fill
               sizes={"100vw"}
               style={{
                 objectFit: 'cover',
               }}
               />
      </div>
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
          February 16-18, 2024
        </h3>

        <h4 className={`display-4 ${styles.Weekend}`}>
          Presidents Day Weekend
        </h4>

        <p className={`lead ${styles.Description}`}>
          A San Francisco institution for decades, the Golden Gate Classic brings together bowlers from across the country, embodying the spirit of Unity, Fellowship, and Inclusion that define IGBO.
        </p>
      </div>

      {/*<div className={styles.BackgroundBasis}/>*/}
      {/*<div className={styles.BackgroundImage}/>*/}
    </section>
  )
}

export default Hero;
