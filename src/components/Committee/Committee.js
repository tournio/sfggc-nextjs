import Image from "next/image";

import styles from './Committee.module.scss';

import scott from '../../images/committee/scott.jpg';
import glenn from '../../images/committee/glenn.jpg';
import allison from '../../images/committee/allison.jpg';
import duane from '../../images/committee/duane.jpg';
import richard from '../../images/committee/richard.jpg';
import robert from '../../images/committee/robert.jpg';

const Committee = ({ id }) => {
  return (
    <section className={`${styles.Committee}`} id={'contact'}>
      <h3 className={`section-heading`}>
        Tournament Committee
      </h3>

      <div className={`${styles.Intro}`}>
        <p className={``}>
          Putting on a tournament is a community effort. The Golden Gate Classic wouldn&apos;t be possible without the effort, work, and contributions of all the people on this page.
        </p>
      </div>

      <div className={`row justify-content-center`}>
        <div className={`col-6 col-sm-4 col-md-3 col-xl-2`}>
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

        <div className={`col-6 col-sm-4 col-md-3 col-xl-2`}>
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

        <div className={`col-6 col-sm-4 col-md-3 col-xl-2`}>
          <div className={`card ${styles.Card}`}>
            <Image src={allison}
                   alt={'A cartoon image of Allison'}
                   className={`img-fluid card-img-top ${styles.Image}`}
            />
            <div className={`card-body`}>
              <p className={`${styles.Name}`}>
                <a href={'mailto:directors@goldengateclassic.org?subject=About%20the%20Golden%20Gate%20Classic'}>
                  Allison Laureano
                </a>
              </p>
              <p className={styles.Role}>
                Treasurer
              </p>
            </div>
          </div>
        </div>

        <div className={`col-6 col-sm-4 col-md-3 col-xl-2`}>
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
                Scratch Master &amp; Co-secretary
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
                Co-secretary &amp; Technologist
              </p>
            </div>
          </div>
        </div>

        <div className={`col-6 col-sm-4 col-md-3 col-xl-2`}>
          <div className={`card ${styles.Card}`}>
            <div className={'card-header'}>
              Committee &amp; Volunteers
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Vince Wilson
              </li>
              <li className="list-group-item">
                Robert Hughes
              </li>
              <li className="list-group-item">
                Cathy Patterson
              </li>
              <li className="list-group-item">
                R.H. Ryan
              </li>
              <li className="list-group-item">
                Stephen Ingram
              </li>
              <li className="list-group-item">
                Corey Lindabury
              </li>
              <li className="list-group-item">
                Patrick O&apos;Connor
              </li>
              <li className="list-group-item">
                Mark Bertelsen
              </li>
              <li className="list-group-item">
                Saman Oun
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className={`row ${styles.Thanks} g-0`}>
        <div className={`col-12 col-sm-3 d-flex justify-content-center`}>
          <div className={styles.Photo}>
            <Image src={richard}
                   alt={'Richard Perez'}
                   className={`img-fluid ${styles.Image}`}
            />
          </div>
        </div>
        <div className={`col-12 col-sm-9`}>
          <p>
            The committee wishes to extend its utmost gratitude and appreciation to Richard Perez. Richard &ndash; &quot;Chewie&quot; to his friends &ndash; has been part of the Golden Gate Classic for more than a decade, the last few years of which he served as Director, including our first year back post-pandemic!
          </p>
          <p>At IGBO Annual 2023, Richard was elected IGBO Treasurer. That's a big job, so it means stepping away from any work with the tournament. (It also means he&apos;ll get to bowl again!)
          </p>
          <p>
            Chewie, thank you for all you do, have done, and continue to do for the tournament and for IGBO. And good luck in February!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Committee;
