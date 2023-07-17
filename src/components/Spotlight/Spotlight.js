import styles from './Spotlight.module.scss';

const Spotlight = () => {
  const REGISTER_URL = 'https://www.tourn.io/tournaments/';

  const prelimText = <p>
    A San Francisco institution for decades, the Golden Gate Classic brings together bowlers from across the country,
    embodying the spirit of Unity, Fellowship, and Inclusion that define IGBO.
  </p>;

  const registrationOpen = (
    <>
      <p>
        Registration is open.
      </p>
      <p>
        <a href={REGISTER_URL}
           className={``}
        >
          Register Online
        </a>
      </p>
    </>
  );

  return (
    <section className={`${styles.Spotlight}`}>
      <div className={``}>
        {prelimText}
        {/*{registrationOpen}*/}
      </div>
    </section>
  );
}

export default Spotlight;
