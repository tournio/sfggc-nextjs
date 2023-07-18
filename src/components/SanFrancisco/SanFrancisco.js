import Link from "next/link";
import Image from "next/image";
import sunshine from '../../images/san-francisco/sunshine.jpg';
import cableCarPowell from '../../images/san-francisco/cable-car-powell-840.jpg';
import ramen from '../../images/san-francisco/ramen.jpg';

import styles from './SanFrancisco.module.scss';
import React from "react";

const SanFrancisco = ({full = true}) => {
  // full determines whether we show a summary or the whole shebang
  // ... the whole shebang is intended to be on its own page, while
  // the summary is intended for the SF section of the main page

  return (
    <section className={styles.SanFrancisco} id={'section-san-francisco'}>
      <h3 className={`section-heading`}>
        San Francisco, California
      </h3>

      <div className={styles.JumboImage}>
        <div className={`${styles.CityDaytimeColor}`}/>
        <div className={`${styles.CityDaytimeImage}`}/>
      </div>
      <div className={`${styles.Credit}`}>
        Image by{' '}
        <a href={'https://www.pexels.com/photo/city-skyline-during-golden-hour-3584437/'}
           target={'_blank'}>
          Kehn Hermano
        </a>
      </div>

      <div className={`${styles.Content}`}>
        <p className={styles.Intro}>
          The San Francisco Bay Area has a long, rich history, from the native Ohlone inhabitants through claims by
          Spain and Mexico, to the Gold Rush leading California to statehood in 1850. The area has held key strategic
          and commercial value ever since, and its diverse tapestry of people, culture, and food makes it a must-visit
          for anyone traveling the western US.
        </p>

        {!full && (
          <p className={styles.MoreLink}>
            <Link href={'/san-francisco'}
                  className={`icon-link icon-link-hover`}>
              More
              <i className={'bi bi-arrow-right align-self-baseline'} aria-hidden={true}/>
            </Link>
          </p>
        )}

        {full && (
          <div className={'row justify-content-center'}>
            <div className={`${styles.Thing} card col-12 col-sm-11 col-md-10 col-lg-4`}>
              <div className={`${styles.Image}`}>
                <Image src={sunshine}
                       alt={'The sun shines over the Golden Gate Bridge and the city of San Francisco'}
                       className={`${styles.Img}`}
                       sizes={'(max-width: 767px) 90vw, (max-width: 1199px) 20vw (min-width: 1200px) 15vw'}
                />
                <div className={styles.ImageShade}></div>
              </div>
              <div className={`${styles.Credit}`}>
                Image by{' '}
                <a href={'https://www.stebleton.net/'}
                   target={'_blank'}>
                  Scott Stebleton
                </a>
              </div>
              <div className={``}>
                <div className={'card-title'}>
                  <h4>
                    Weather
                  </h4>
                </div>
                <p>
                  <a href="https://www.wunderground.com/weather/us/ca/san-francisco/KCASANFR2046">
                    Current Conditions
                  </a>
                </p>
                <p>
                  The San Francisco Bay Area is notorious for surprising visitors who expect the weather to be sunny and
                  warm, like in so many media depictions of California. But don&apos;t be fooled! Most of the year, San
                  Francisco and the peninsula are wrapped in cool fog, with sunshine more the exception than the rule.
                </p>
                <p>
                  You&apos;ll be visiting in February, so it&apos;s a safe bet that you&apos;ll want to pack for cool-to-pleasant
                  weather. Fog is common, especially in the hills above Daly City where our bowling center is! High
                  temperatures are around{' '}
                  <span className={`${styles.HighTemp}`}>60°F (15°C)</span>
                  {' '}with lows around{' '}
                  <span className={`${styles.LowTemp}`}>47°F (8°C)</span>
                  {'.'}
                </p>
                <p>
                  February is in the back half of our rainy season, so we recommend bringing an umbrella or
                  rain-resistant jacket. Sure, we&apos;re usually in a drought, but that doesn&apos;t mean it never rains!
                </p>
              </div>
            </div>

            <div className={`${styles.Thing} card col-12 col-sm-6 col-lg-4`}>
              <div className={`${styles.Image}`}>
                <Image src={cableCarPowell}
                       alt={'The cable car turnaround point at Powell and Market Streets'}
                       className={`${styles.Img}`}
                       sizes={'(max-width: 575px) 95vw, (min-width: 768px) 50vw, (min-width: 992px) 33vw'}
                />
                <div className={styles.ImageShade}></div>
              </div>
              <div className={`${styles.Credit}`}>
                Image by{' '}
                <a href={'https://www.pexels.com/photo/road-beside-buildings-1119075/'}
                   target={'_blank'}>
                  Brett Sayles
                </a>
              </div>
              <div className={``}>
                <div className={'card-title'}>
                  <h4>
                    Attractions
                  </h4>
                </div>
                <p>
                  The Bay Area has an abundance of riches when it comes to sights, sounds, and activities. To name just
                  a
                  few:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://www.google.com/maps/place/Union+Square,+San+Francisco,+CA+94108/@37.7879373,-122.4096922,17z/data=!3m1!4b1!4m5!3m4!1s0x8085808ed3fd40bb:0xfe41d9b5994cb6ba!8m2!3d37.7879938!4d-122.4074374">Union
                      Square shopping</a>
                  </li>
                  <li>
                    <a href="http://www.alcatrazcruises.com/">Alcatraz</a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/place/PIER+39/@37.8086772,-122.412015,17z/data=!3m1!4b1!4m5!3m4!1s0x808580fc8bb3211d:0xbaf631600de6b39e!8m2!3d37.808673!4d-122.409821">Pier
                      39 &amp; the Fisherman&apos;s Wharf</a>
                  </li>
                  <li>
                    <a href="https://www.sfmta.com/getting-around/transit/how-ride/how-to-cable-cars">Cable Cars</a>
                  </li>
                  <li>
                    <a href="http://www.ferrybuildingmarketplace.com/">Ferry Building</a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/place/Lombard+Street/@37.8021432,-122.420934,17z/data=!3m1!4b1!4m5!3m4!1s0x808580e66bb70f81:0x10d3ce0ac1ec1299!8m2!3d37.802139!4d-122.41874">Lombard
                      Street</a>
                  </li>
                  <li>
                    <a href="http://goldengatebridge.org/">The Golden Gate Bridge</a>
                  </li>
                  <li>
                    <a href="https://www.nps.gov/muwo/index.htm">Muir Woods</a>
                  </li>
                  <li>
                    <a href="http://thefillmore.com/">The Fillmore</a>
                  </li>
                  <li>
                    <a href="http://www.berkeley.edu/">University of California at Berkeley</a>
                  </li>
                </ul>
                <p>
                  There&apos;s way more than we can list here, but{' '}
                  <a href="https://www.sftravel.com/" target="_blank">SF.travel</a>
                  {' '}is a good place to start.
                </p>
              </div>
            </div>

            <div className={`${styles.Thing} card col-12 col-sm-6 col-sm-6 col-lg-4`}>
              <div className={`${styles.Image}`}>
                <Image src={ramen}
                       alt={'A bowl of ramen with salad on the side'}
                       className={`${styles.Img}`}
                       sizes={'(max-width: 575px) 95vw, (max-width: 767px) 50vw, (max-width: 1399px) 33vw'}
                />
                <div className={styles.ImageShade}></div>
              </div>
              <div className={`${styles.Credit}`}>
                Image by{' '}
                <a href={'https://www.pexels.com/photo/top-view-photo-of-ramen-soup-2591594/'}
                   target={'_blank'}>
                  Jan Nguyen
                </a>
              </div>
              <div className={``}>
                <div className={'card-title'}>
                  <h4>
                    Restaurants
                  </h4>
                </div>
                <p>
                  With a population whose roots span the entire globe, the San Francisco Bay Area is home to an
                  incredibly
                  diverse array of cuisines. To give you just a taste...
                </p>
                <ul>
                  <li>
                    <a href="https://www.starbellysf.com/">Starbelly</a>
                  </li>
                  <li>
                    <a href="http://www.espetus.com/">Espetus Brazilian Steakhouse</a>
                  </li>
                  <li>
                    <a href="http://www.oshathai.com/">Osha Thai</a>
                  </li>
                  <li>
                    <a href="http://escapefromnewyorkpizza.com/">Escape From New York Pizza</a>
                  </li>
                  <li>
                    <a href="http://www.theplantcafe.com/">The Plant Café Organic</a>
                  </li>
                  <li>
                    <a href="https://gracias-madre.getbento.com/">Gracias Madre</a>
                  </li>
                  <li>
                    <a href="https://www.keevaindiankitchensanfrancisco.com/">Keeva Indian Kitchen</a>
                  </li>
                </ul>
                <p>
                  <a href="http://sf.eater.com/">
                    SF Eater
                  </a>
                  {' '}has the low-down on all the great grub San Francisco has to offer. What&apos;s more, the Bay Area is a
                  haven
                  for vegetarians and vegans.{' '}
                  <a href="https://www.happycow.net/north_america/usa/california/san_francisco/" target="_blank">So many
                    to choose from!</a>
                </p>

              </div>
            </div>
          </div>

        )}
      </div>
    </section>
  );
}

export default SanFrancisco;
