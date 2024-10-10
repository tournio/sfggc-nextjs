import Image from "next/image";

import styles from './Committee.module.scss';

import glenn from '../../images/committee/glenn.jpg';
import allison from '../../images/committee/allison.jpg';
import duane from '../../images/committee/duane.jpg';
import robert from '../../images/committee/robert.jpg';

const Committee = () => {
  return (
    <section className={`${styles.Committee}`} id={'contact'}>
      <h3 className={`section-heading`}>
        Tournament Committee
      </h3>

      <div className={`${styles.Intro}`}>
        <p className={``}>
          Putting on a tournament is a community effort. The Golden Gate Classic wouldn&apos;t be possible without the work and contributions of all the people on this page.
        </p>
      </div>

      <div className={`row justify-content-center`}>
        <div className={`col-6 col-sm-4 col-lg-3`}>
          <div className={`card ${styles.Card}`}>
            <Image src={glenn}
                   alt={'Glenn Normandin'}
                   className={`img-fluid card-img-top ${styles.Image}`}
            />
            <div className={`card-body`}>
              <p className={`${styles.Name}`}>
                <a href={'mailto:directors@goldengateclassic.org?subject=About%20the%20Golden%20Gate%20Classic'}
                   className={`card-link`}
                >
                  Glenn Normandin
                </a>
              </p>
              <p className={styles.Role}>
                Co-Director
              </p>
            </div>
          </div>

        </div>

        <div className={`col-6 col-sm-4 col-lg-3`}>
          <div className={`card ${styles.Card}`}>
            <Image src={robert}
                   alt={'Robert Hendricks'}
                   className={`img-fluid card-img-top ${styles.Image}`}
            />
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

        <div className={`col-6 col-sm-4 col-lg-3`}>
          <div className={`card ${styles.Card}`}>
            <Image src={allison}
                   alt={'A cartoon image of Allison'}
                   className={`img-fluid card-img-top ${styles.Image}`}
            />
            <div className={`card-body`}>
              <p className={`${styles.Name}`}>
                {/*<a href={'mailto:directors@goldengateclassic.org?subject=About%20the%20Golden%20Gate%20Classic'}>*/}
                  Allison Laureano
                {/*</a>*/}
              </p>
              <p className={styles.Role}>
                Operations &amp; Technologist
              </p>
            </div>
          </div>
        </div>

        <div className={`col-6 col-sm-4 col-lg-3`}>
          <div className={`card ${styles.Card}`}>
            <Image src={duane}
                   alt={'Duane'}
                   className={`img-fluid card-img-top ${styles.Image}`}
            />
            <div className={`card-body`}>
              <p className={`${styles.Name}`}>
                <a href={'mailto:directors@goldengateclassic.org?subject=About%20the%20Golden%20Gate%20Classic'}>
                  Duane Flohra
                </a>
              </p>
              <p className={styles.Role}>
                Scratch Master
              </p>
            </div>
          </div>
        </div>

        <div className={`col-6 col-sm-4 col-lg-3`}>
          <div className={`card ${styles.Card}`}>
            <div className={'card-header'}>
              Committee &amp; Volunteers
            </div>
            <ul className="list-group list-group-flush">
              {/*/!*<li className="list-group-item">*!/*/}
              {/*/!*  Vince Wilson*!/*/}
              {/*/!*</li>*!/*/}
              {/*<li className="list-group-item">*/}
              {/*  Robert Hughes*/}
              {/*</li>*/}
              <li className="list-group-item">
                Cathy Patterson
              </li>
              {/*<li className="list-group-item">*/}
              {/*  R.H. Ryan*/}
              {/*</li>*/}
              {/*<li className="list-group-item">*/}
              {/*  Stephen Ingram*/}
              {/*</li>*/}
              {/*<li className="list-group-item">*/}
              {/*  Corey Lindabury*/}
              {/*</li>*/}
              {/*<li className="list-group-item">*/}
              {/*  Patrick O&apos;Connor*/}
              {/*</li>*/}
              {/*<li className="list-group-item">*/}
              {/*  Mark Bertelsen*/}
              {/*</li>*/}
              {/*<li className="list-group-item">*/}
              {/*  Saman Oun*/}
              {/*</li>*/}
            </ul>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Committee;
