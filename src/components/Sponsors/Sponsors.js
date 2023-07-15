import React from "react";
import Link from "next/link";
import Image from "next/image";

import brunswick from '../../images/sponsors/brunswick.jpg';
import igbo from '../../images/sponsors/igbo.png';
import usbc from '../../images/sponsors/usbc.jpg';
import budlight from '../../images/sponsors/budlight.gif';

import styles from './Sponsors.module.scss';

const Sponsors = () => {
  const sponsorDetails = [
    {
      alt: 'Brunswick Bowling Products',
      href: 'https://brunswickbowling.com/',
      title: 'Brunswick Bowling Products',
      src: brunswick,
    },
    {
      alt: 'The International Gay Bowling Organization',
      href: 'http://www.igbo.org/',
      title: 'The International Gay Bowling Organization',
      src: igbo,
    },
    {
      alt: 'The United States Bowling Congress',
      href: 'http://www.bowl.com/',
      title: 'The United States Bowling Congress',
      src: usbc,
    },
    {
      alt: "Bud Light, by Matagrano",
      href: 'http://www.budlight.com/',
      title: "Bud Light, by Matagrano",
      src: budlight,
    },
  ];

  return (
    <div className={styles.Sponsors}>
      <div className={`row g-0 align-items-center justify-content-around ${styles.Row}`}>
        {sponsorDetails.map((s, i) => {
          return (
            <div className={`col-5 ${styles.ImageContainer}`}>
              <Link key={i}
                    href={s.href}
                    target={'_blank'}
                    title={s.title}>
                <Image className="img-fluid"
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
