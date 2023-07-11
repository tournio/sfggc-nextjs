import Image from "next/image";
import Link from "next/link";
import cbcLogo from '../../images/cbc-logo.png';

import styles from './Location.module.scss';

const Location = () => {
  return (
    <section className={`${styles.Location}`} id={'section-location'}>
      <h3 className={`section-heading`}>
        Bowling Center
      </h3>
      <div className={'row mb-3'}>
        <div className={'col-12 col-md-6 d-flex justify-content-center'}>
          <Link href={'http://www.classicbowling.com/'}
             target={'_blank'}>
            <Image src={cbcLogo}
                   alt={'Logo for Classic Bowling Center'}
                   className={`img-fluid ${styles.Logo}`}
            />
          </Link>
        </div>
        <div className={`col ${styles.Address}`}>
          <h4 className={'d-md-none'}>
            <a href={'http://www.classicbowling.com/'}>
              Classic Bowling Center
            </a>
          </h4>
          <h4 className={'d-none d-md-block'}>
            Classic Bowling Center
          </h4>
          <address>
            <span className={`d-block`}>
              900 King Drive
            </span>
            <span className={`d-block`}>
              Daly City, CA 94015
            </span>
            <span className={`d-block`}>
              <i className={`bi-telephone-fill me-2`} aria-hidden={true}/>
              <a href={`tel:6508780300`}>
                650-878-0300
              </a>
            </span>
          </address>
        </div>
      </div>

      <div className={`ratio ratio-21x9 ${styles.Map}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3158.9179923188367!2d-122.467872!3d37.651132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7bc86aa2437f%3A0x9fe5dab297c66d45!2sClassic+Bowling+Center!5e0!3m2!1sen!2sus!4v1411883901483"
          allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className={`section-image-background ${styles.BackgroundImage}`}></div>
      <div className={`section-background-shade ${styles.BackgroundShade}`}></div>
    </section>
  );
}

export default Location;
