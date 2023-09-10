import React from "react";
import Link from "next/link";
import Image from "next/image";

import brunswick from '../../images/sponsors/brunswick.png';
import storm from '../../images/sponsors/storm.png';
import igbo from '../../images/sponsors/igbo.png';
import usbc from '../../images/sponsors/usbc.png';
import budlight from '../../images/sponsors/budlight.gif';

import styles from './Sponsors.module.scss';

const Sponsors = () => {
  const sponsorDetails = [
    {
      alt: 'Brunswick Bowling Products',
      href: 'https://brunswickbowling.com/bowlers',
      title: 'Brunswick Bowling Products',
      src: brunswick,
      classNames: styles.AdjustedBrightness,
    },
    // {
    //   alt: 'Storm Bowling Products',
    //   href: 'https://stormbowling.com/',
    //   title: 'Storm Bowling Products',
    //   src: storm,
    //   classNames: styles.AdjustedBrightness,
    // },
    {
      alt: 'The International Gay Bowling Organization',
      href: 'http://www.igbo.org/',
      title: 'The International Gay Bowling Organization',
      src: igbo,
      classNames: '',
    },
    {
      alt: 'The United States Bowling Congress',
      href: 'http://www.bowl.com/',
      title: 'The United States Bowling Congress',
      src: usbc,
      classNames: '',
    },
    {
      alt: "Bud Light, by Matagrano",
      href: 'http://www.budlight.com/',
      title: "Bud Light, by Matagrano",
      src: budlight,
      classNames: '',
    },
  ];

  return (
    <div className={styles.Sponsors}>
      <div className={`row g-0 align-items-center justify-content-around ${styles.Row}`}>
        {sponsorDetails.map((s, i) => {
          return (
            <div key={i} className={`col-5 ${styles.ImageContainer}`}>
              <Link href={s.href}
                    target={'_blank'}
                    title={s.title}>
                <Image className={`img-fluid ${s.classNames}`}
                       alt={s.alt}
                       src={s.src} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sponsors;
