import Image from "next/image";

import styles from './Committee.module.scss';

import scott from '../../images/committee/scott.jpg';
import React from "react";

const Committee = ({ id }) => {
  return (
    <section className={styles.Committee} id={'contact'}>
      <h3 className={`section-heading`}>
        Tournament Committee
      </h3>

      <div className={``}>
        <p className={'lead mb-3'}>
          Putting on a tournament is a community effort. The Golden Gate Classic wouldn&apos;t be possible without the effort, work, and contributions of all the people on this page.
        </p>
      </div>

      <div className={`row justify-content-center`}>
        <div className={`col-6 col-sm-4 col-md-3 col-xl-2`}>
          <div className={`card ${styles.Card}`}>
            <div className={`card-body ${styles.Face}`}>
              <i className={`bi-person-workspace ${styles.Placeholder}`}/>
            </div>
            <div className={`card-body`}>
              <p className={`${styles.Name}`}>
                <a href={'mailto:directors@goldengateclassic.org?subject=About%20the%20Golden%20Gate%20Classic'}>
                  Glenn Normandin
                </a>
              </p>
              <p className={styles.Role}>
                Co-Director
              </p>
            </div>
          </div>
        </div>

        <div className={`col-6 col-sm-4 col-md-3 col-xl-2`}>
          <div className={`card ${styles.Card}`}>
            <div className={`card-body ${styles.Face}`}>
              <i className={`bi-person-workspace ${styles.Placeholder}`}/>
            </div>
            <div className={`card-body`}>
              <p className={`${styles.Name}`}>
                <a href={'mailto:directors@goldengateclassic.org?subject=About%20the%20Golden%20Gate%20Classic'}>
                  Robert Hendricks
                </a>
              </p>
              <p className={styles.Role}>
                Co-Director
              </p>
            </div>
          </div>
        </div>

        <div className={`col-6 col-sm-4 col-md-3 col-xl-2`}>
          <div className={`card ${styles.Card}`}>
            <Image src={scott}
                   alt={'Scott with a cat on his back'}
                   className={`img-fluid card-img-top ${styles.Image}`}
            />
            <div className={`card-body`}>
              <p className={`${styles.Name}`}>
                <a href={'mailto:website@goldengateclassic.org?subject=About%20the%20Golden%20Gate%20Classic'}>
                  Scott Stebleton
                </a>
              </p>
              <p className={styles.Role}>
                Technologist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Committee;
