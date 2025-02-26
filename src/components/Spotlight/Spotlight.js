import styles from './Spotlight.module.scss';
// import Link from "next/link";

const Spotlight = () => {
  const prelimText = (
    <p>
      A San Francisco institution for decades, the Golden Gate Classic brings together bowlers from across the country,
      embodying the spirit of Unity, Fellowship, and Inclusion that define IGBO.
    </p>
  );

  // const registrationOpeningDate = (
  //   <p>
  //     Registration opens to the public in mid-November, so get your keyboards ready!
  //   </p>
  // );

  // const registrationOpen = (
  //   <p>
  //     Registration is open! Now is the time to get your team&apos;s entry in.
  //   </p>
  // );

  // const scratchMastersResults = (
  //   <p>
  //     Scratch Masters results can be found <Link href={'/results'}>here</Link>.
  //   </p>
  // )

  // const almostTime = (
  //   <>
  //     <p>
  //       It&apos;s almost tournament weekend! We want to wish everyone a warm welcome to the Bay Area. Thank you for being part of our tournament; we literally could not do it without you!
  //     </p>
  //     <p>
  //       Keep an eye on this space for updates between now and the end of tournament weekend.
  //     </p>
  //   </>
  // );

  // const itsTime = (
  //   <>
  //     <p>
  //       It&apos;s tournament weekend! We want to wish everyone a warm welcome to the Bay Area, even if the weather isn&apos;t really cooperating. Thank you for being part of our tournament; we literally could not do it without you!
  //     </p>
  //     <p>
  //       Keep an eye on this space for updates between now and the end of tournament weekend.
  //     </p>
  //     {/*{scratchMastersResults}*/}
  //   </>
  // );

  const thatsAWrap = (
  //   <>
      <h3>That&apos;s a wrap!</h3>
  //     <p>We hope everyone had a fabulous tournament! Thank you to everyone who journeyed from near and far to be with us for the holiday weekend. Whether you were bowling, volunteering, working, or playing cheerleader, we are thrilled that you joined us.</p>
  //     <p>We are already excited for next year! Got a suggestion for how we can make next year&apos;s tournament even better?{' '}
  //       <a href={'mailto:directors@goldengateclassic.com?subject=SFGGC%202025'}>
  //         Drop us a line!
  //       </a>
  //     </p>
  //     <p>Results are available <Link href={'/results'}>here</Link>.</p>
  //   </>
  );

  return (
    <section className={`${styles.Spotlight}`}>
      <div className={``}>
        {prelimText}
        {/*{registrationOpeningDate}*/}
        {/*{registrationOpen}*/}
        {/*<RegisterCTA/>*/}
        {/*{almostTime}*/}
        {/*{itsTime}*/}
        {/*{scratchMastersResults}*/}
        {thatsAWrap}
      </div>
    </section>
  );
}

export default Spotlight;
