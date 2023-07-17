import Image from "next/image";
import Link from "next/link";
import cbcLogo from '../../images/cbc-logo.png';

import styles from './Location.module.scss';

const Location = () => {
  return (
    <section className={`${styles.Location}`} id={'section-location'}>
      <h3 className={`section-heading`}>
        Location
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
          <h4 className={'display-5 d-md-none'}>
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
            <span className={`d-block mb-3`}>
              Daly City, CA 94015
            </span>
            <span className={`d-block`}>
              <a href={`tel:6508780300`}
                 className={`btn btn-sfggc-action`}>
                <i className={`bi-telephone-fill me-2`} aria-hidden={true}/>
                650-878-0300
              </a>
            </span>
          </address>
        </div>
      </div>

      <div className={`ratio ratio-21x9 ${styles.Map}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1607.0657678661782!2d-122.4699218330858!3d37.65125620394849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sus!4v1689611010549!5m2!1sen!2sus"
          allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className={`${styles.DiningOptions}`}>
        <h4>
          <i className={'bi bi-shop pe-2'} aria-hidden={true}/>
          Nearby Dining Options
        </h4>
        <ul>
          <li>
            <Link href={'https://littlecaesars.com/en-us/store/8849'}
                  target={'_blank'}>
              Little Caesars
            </Link>
          </li>
          <li>
            Mr. Fong BBQ &amp; Noodles
          </li>
          <li>
            New Horizons Bakery
          </li>
          <li>
            Onyx Cafe
          </li>
          <li>
            Pho Cafe
          </li>
          <li>
            <Link href={'https://popkitchendc.com/'}
                  target={'_blank'}>
              Pop Kitchen
            </Link>
          </li>
          <li>
            Starbread
          </li>
          <li>
            <Link href={'https://restaurants.subway.com/united-states/ca/daly-city/1000-king-drive?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=46712&utm_campaign=evergreen-2020'}
                  target={'_blank'}>
              Subway
            </Link>
          </li>
          <li>
            <Link href={'http://www.taiyuanrestaurant.com/'}
               target={'_blank'}>
              Tai Yuan Seafood
            </Link>
          </li>
          <li>
            Tea Ever
          </li>
        </ul>
      </div>

      <div className={`section-image-background ${styles.BackgroundImage}`}></div>
      <div className={`section-background-shade ${styles.BackgroundShade}`}></div>
    </section>
  );
}

export default Location;
