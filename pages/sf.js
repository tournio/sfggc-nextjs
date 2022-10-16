import React from 'react';

import Layout from "../components/layout";

import styles from './sf.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Ratio from "react-bootstrap/Ratio";

const sanFrancisco = () => {
  const photoDeets = [
    {alt: "San Francisco's famous cable car", filename: '2'},
    {alt: 'The Painted Ladies', filename: '16'},
    {alt: 'Coit Tower, atop Telegraph Hill', filename: '3'},
    {alt: 'San Francisco City Hall, lit up for Pride', filename: '14'},
    {alt: 'The Marquee of the Castro Theater', filename: '15'},
    {alt: 'The Golden Gate Bridge', filename: '1'},
    {alt: 'Market Street, as seen from Twin Peaks', filename: '4'},
    {alt: 'The Bay Area, as seen from Angel Island', filename: '7'},
    {alt: 'Alcatraz Island', filename: '8'},
    {alt: 'San Francisco, with Sutro Tower visible', filename: '9'},
    {alt: 'A mural alongside the Caltrain tracks', filename: '10'},
    {alt: 'A winery', filename: '11'},
    {alt: 'The eastern span of the Bay Bridge', filename: '12'},
  ];

  return (
    <Layout>
      <div className={styles.SF}>
        <Row className="order-3 order-md-2">
          <Col>
            <Carousel fade>
              {photoDeets.map((photo, i) => {
                return (
                  <Carousel.Item key={i}>
                    <img src={'/images/sf_carousel/' + photo.filename + '.jpg'}
                         alt={photo.alt}
                         className="d-block w-100"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <p className="lead text-center">
              Leave your heart in the city by the bay!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h3>
              <i className="bi bi-cloud-sun" aria-hidden={true}></i>
              {' '}Weather
            </h3>
            <p>
              <a href="https://www.wunderground.com/cgi-bin/findweather/getForecast?query=pws:KCASOUTH53">
                Current Conditions
              </a>
            </p>
            <p>
              The San Francisco Bay Area is notorious for surprising visitors who expect the weather to be sunny and
              warm, like in so many media depictions of California. But don't be fooled! Most of the year, San Francisco
              and the peninsula are wrapped in cool fog, with sunshine more the exception than the rule.
            </p>
            <p>
              You'll be visiting in February, so it's a safe bet that you'll want to pack for cool-to-pleasant weather.
              Fog is common, especially in the hills above Daly City where our bowling center is! High temperatures are
              around{' '}
              <span className="text-danger">60°F (15°C)</span>
              {' '}with lows around{' '}
              <span className="text-info">47°F (8°C)</span>
              {'.'}
            </p>
            <p>
              February is in the back half of our rainy season, so we recommend bringing an umbrella or rain-resistant
              jacket. Sure, we're in a drought, but that doesn't mean it never rains!
            </p>
          </Col>
          <Col md={4}>
            <h3>
              <i className="bi bi-camera" aria-hidden={true}></i>
              {' '}Attractions
            </h3>
            <p>
              The Bay Area has an abundance of riches when it comes to sights, sounds, and activities. To name just a
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
                  39 & the Fisherman's Wharf</a>
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
              There's way more than we can list here, but{' '}
              <a href="https://www.sftravel.com/" target="_blank">SF.travel</a>
              {' '}is a good place to start.
            </p>
          </Col>
          <Col md={4}>
            <h3>
              <i className="bi bi-shop" aria-hidden={true}></i>
              {' '}Restaurants
            </h3>
            <p>
              With a population whose roots span the entire globe, the San Francisco Bay Area is home to an incredibly
              diverse array of cuisines. To give you just a taste...
            </p>
            <ul>
              <li>
                <a href="http://www.harveyssf.com/">Harvey's</a>
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
                <a href="https://www.gracias-madre.com/">Gracias Madre</a>
              </li>
              <li>
                <a href="https://www.keevaindiankitchensanfrancisco.com/">Keeva Indian Kitchen</a>
              </li>
            </ul>
            <p>
              <a href="http://sf.eater.com/">
                SF Eater
              </a>
              {' '}has the low-down on all the great grub San Francisco has to offer. What's more, the Bay Area is a haven
              for vegetarians and vegans.{' '}
              <a href="https://www.happycow.net/north_america/usa/california/san_francisco/" target="_blank">So many
                to choose from!</a>
            </p>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default sanFrancisco;
