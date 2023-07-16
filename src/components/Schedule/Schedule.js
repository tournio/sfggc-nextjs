import styles from './Schedule.module.scss';

const Schedule = () => {

  return (
    <section className={styles.Schedule} id={'section-schedule'}>
      <h3 className={`section-heading`}>
        Schedule of Events
      </h3>
      <p className={`${styles.Disclaimer}`}>
        (All times subject to change)
      </p>

      <div className={`col-sm-4 ${styles.Date}`}>
        <h4>
          Friday, February 16
        </h4>
      </div>

      <div className={`row ${styles.Event}`}>
        <div className={`col-sm-5 ${styles.Detail}`}>
          <h5>
            Tournament Check-in
          </h5>
          <p>
            Bowling center meeting room
          </p>
        </div>
        <div className={`col-sm-3 ${styles.Time}`}>
          <h5>
            Time TBA
            {/*7pm-9pm*/}
          </h5>
        </div>
      </div>

      <hr />

      <div className={`row ${styles.Event}`}>
        <div className={`col-sm-5 ${styles.Detail}`}>
          <h5>
            9-pin No-Tap Mixer
          </h5>
          <p>
            Check-in begins 60 minutes prior to start time
          </p>
        </div>
        <div className={`col-sm-3 ${styles.Time}`}>
          <h5>
            Time TBA
            {/*8pm-11pm*/}
          </h5>
        </div>
      </div>

      {/*<hr className={`d-none d-md-block`}/>*/}

      <div className={`col-sm-4 ${styles.Date}`}>
        <h4>
          Saturday, February 17
        </h4>
      </div>

      <div className={`row ${styles.Event}`}>
        <div className={`col-sm-5 ${styles.Detail}`}>
          <h5>
            Tournament Check-in
          </h5>
          <p>
            Bowling center meeting room
          </p>
        </div>
        <div className={`col-sm-3 ${styles.Time}`}>
          <h5>
            Time TBA
            {/*12pm-2pm*/}
          </h5>
        </div>
      </div>

      <hr />

      <div className={`row ${styles.Event}`}>
        <div className={`col-sm-5 ${styles.Detail}`}>
          <h5>
            Doubles &amp; Team Events
          </h5>
          <p>
            Check-in begins 60 minutes prior to start time
          </p>
          <p>
            30-minute break between events
          </p>
        </div>
        <div className={`col-sm-3 ${styles.Time}`}>
          <h5>
            Time TBA
            {/*2pm-8pm*/}
          </h5>
        </div>
      </div>

      {/*<hr className={`d-none d-md-block`}/>*/}

      <div className={`col-sm-4 ${styles.Date}`}>
        <h4>
          Sunday, February 18
        </h4>
      </div>

      <div className={`row ${styles.Event}`}>
        <div className={`col-sm-5 ${styles.Detail}`}>
          <h5>
            Singles Event
          </h5>
          <p>
            Check-in begins 60 minutes prior to start time
          </p>
        </div>
        <div className={`col-sm-3 ${styles.Time}`}>
          <h5>
            Time TBA
            {/*10am-1pm*/}
          </h5>
        </div>
      </div>

      <hr />

      <div className={`row ${styles.Event}`}>
        <div className={`col-sm-5 ${styles.Detail}`}>
          <h5>
            Scratch Masters
          </h5>
        </div>
        <div className={`col-sm-3 ${styles.Time}`}>
          <h5>
            Time TBA
            {/*2pm-5pm*/}
          </h5>
        </div>
      </div>

      {/*<div className={`row ${styles.Event}`}>*/}
      {/*  <div className={`offset-sm-4 col-sm-5 ${styles.Detail}`}>*/}
      {/*    <h5>*/}
      {/*      Awards Ceremony*/}
      {/*    </h5>*/}
      {/*    <p>*/}
      {/*      We&apos;ll gather in the Classic Bowling Center bar.*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*  <div className={`col-sm-3 ${styles.Time}`}>*/}
      {/*    <h5>*/}
      {/*      5pm-6pm*/}
      {/*    </h5>*/}
      {/*  </div>*/}
      {/*</div>*/}


      <div className={`section-image-background ${styles.BackgroundImage}`}></div>
      <div className={`section-background-shade ${styles.BackgroundShade}`}></div>
    </section>
  )
}

export default Schedule;
