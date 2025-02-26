import Image from "next/image";

import styles from './ScrMstWinners.module.scss';

import a_winner from '../../images/scrmst-winners/a_winner.jpg';
import b_winner from '../../images/scrmst-winners/b_winner.jpg';
import c_winner from '../../images/scrmst-winners/c_winner.jpg';
import d_winner from '../../images/scrmst-winners/d_winner.jpg';

const ScrMstWinners = () => {
  return (
    <section className={`${styles.ScrMstWinners}`} id={'contact'}>
      <h3 className={`section-heading`}>
        Scratch Masters Winners
      </h3>

      <div className={`${styles.Intro}`}>
        <p className={``}>
          Gallery of Winners
        </p>
      </div>

      <div className={`row justify-content-center`}>
        <div className={`col-6 col-sm-4 col-lg-3`}>
          <div className={`card ${styles.Card}`}>
            <Image src={a_winner}
                   alt={'Daniel Chin'}
                   className={`img-fluid card-img-top ${styles.Image}`}
            />
            <div className={`card-body`}>
              <p className={`${styles.Name}`}>
                  Daniel Chin
              </p>
              <p className={styles.Role}>
                Division A Winner
              </p>
            </div>
          </div>

        </div>

        <div className={`col-6 col-sm-4 col-lg-3`}>
          <div className={`card ${styles.Card}`}>
            <Image src={b_winner}
                   alt={'Russ Thatcher'}
                   className={`img-fluid card-img-top ${styles.Image}`}
            />
            <div className={`card-body`}>
              <p className={`${styles.Name}`}>
                  Russ Thatcher
               </p>
              <p className={styles.Role}>
                Division B Winner
              </p>
            </div>
          </div>
        </div>

        <div className={`col-6 col-sm-4 col-lg-3`}>
          <div className={`card ${styles.Card}`}>
            <Image src={c_winner}
                   alt={'Robert Michaels'}
                   className={`img-fluid card-img-top ${styles.Image}`}
            />
            <div className={`card-body`}>
              <p className={`${styles.Name}`}>
                  Robert Michaels
              </p>
              <p className={styles.Role}>
                Division C Winner
              </p>
            </div>
          </div>
        </div>

        <div className={`col-6 col-sm-4 col-lg-3`}>
          <div className={`card ${styles.Card}`}>
            <Image src={d_winner}
                   alt={'Jason Eller'}
                   className={`img-fluid card-img-top ${styles.Image}`}
            />
            <div className={`card-body`}>
              <p className={`${styles.Name}`}>
                  Jason Eller
              </p>
              <p className={styles.Role}>
                Division D Winner
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ScrMstWinners;
