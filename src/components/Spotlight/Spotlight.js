import styles from './Spotlight.module.scss';
import RegisterCTA from "../RegisterCTA/RegisterCTA";

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

  const registrationOpen = (
    <p>
      Registration is open! Now is the time to get your team&apos;s entry in.
    </p>
  );

  return (
    <section className={`${styles.Spotlight}`}>
      <div className={``}>
        {/*{prelimText}*/}
        {/*{registrationOpeningDate}*/}
        {registrationOpen}
        <RegisterCTA/>
      </div>
    </section>
  );
}

export default Spotlight;
