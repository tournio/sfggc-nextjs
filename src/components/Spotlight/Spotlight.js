import styles from './Spotlight.module.scss';

const Spotlight = () => {
  // const prelimText = <p>
  //   A San Francisco institution for decades, the Golden Gate Classic brings together bowlers from across the country,
  //   embodying the spirit of Unity, Fellowship, and Inclusion that define IGBO.
  // </p>;

  // const registrationOpeningDate = (
  //   <>
  //     <p>
  //       Registration opens to the public on November 15, so get your keyboards ready!
  //     </p>
  //   </>
  // );

  // const registrationOpen = (
  //   <p>
  //     Registration is open! Now is the time to get your team&apos;s entry in.
  //   </p>
  // );

  const almostTime = (
    <>
      <p>
        It&apos;s almost tournament weekend! We want to wish everyone a warm welcome to the Bay Area. Thank you for being part of our tournament; we literally could not do it without you!
      </p>
      <p>
        Keep an eye on this space for updates between now and the end of tournament weekend.
      </p>
    </>
  );

  return (
    <section className={`${styles.Spotlight}`}>
      <div className={``}>
        {/*{prelimText}*/}
        {/*{registrationOpeningDate}*/}
        {/*{registrationOpen}*/}
        {/*<RegisterCTA/>*/}
        {almostTime}
      </div>
    </section>
  );
}

export default Spotlight;
