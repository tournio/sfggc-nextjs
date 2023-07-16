import React from "react";
import Link from "next/link";
import Image from "next/image";

import yliLogo from '../../images/yli.png';

import styles from './Beneficiary.module.scss';

const Beneficiary = () => {
  const yliUrl = 'https://yli.org';

  return (
    <section className={styles.Beneficiary} id={'section-beneficiary'}>
      <h3 className={`section-heading`}>
        Charitable Partner
      </h3>

      <p>
        Our tournament is a proud fundraising partner for the{' '}
        <Link href={yliUrl}
              target={'_blank'}
              >
          Youth Leadership Institute
        </Link>
        . In fact, the 2023 Golden Gate Classic raised{' '}
        <strong>
          $2,000
        </strong>
        {' '}for YLI!
      </p>

      <div className={`${styles.ImageContainer} d-flex justify-content-center`}>
        <Link href={yliUrl}
              target={'_blank'}
        >
          <Image src={yliLogo}
                 alt={'Youth Leadership Institute'}
                 className={`img-fluid ${styles.Image}`}
          ></Image>
        </Link>
      </div>

      <p>
        Their mission is simple yet important:
      </p>

      <blockquote className={styles.Mission}>
        Youth Leadership Institute builds communities where young people and their adult allies come together to create positive community change that promotes social justice and racial equity.
      </blockquote>

      <p>
        By participating in the Golden Gate Classic, whether through bowling, purchasing raffle tickets, or contributing to any of our other myriad fundraisers, you are helping the Youth Leadership Institute work toward a more just and equitable future for everyone!
      </p>
    </section>
  );
}

export default Beneficiary;
