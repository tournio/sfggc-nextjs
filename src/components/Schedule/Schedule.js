import styles from './Schedule.module.scss';

const Schedule = () => {

  const days = [
    {
      date: 'Friday, February 16',
      events: [
        {
          name: 'Tournament Check-in',
          detail: 'Bowling center meeting room',
          more: '',
          time: '6pm - 8pm',
        },
        {
          name: '9-pin No-Tap Mixer',
          detail: '3 games, $30 per bowler',
          more: 'Open to all, including non-tournament bowlers',
          time: '8pm - 10pm',
        },
      ]
    },
    {
      date: 'Saturday, February 17',
      events: [
        {
          name: 'Tournament Check-in',
          detail: 'Bowling center meeting room',
          more: '',
          time: '12pm - 2pm',
        },
        {
          name: 'Doubles and Team Events',
          detail: '30-minute break between events',
          more: '',
          time: '2:30pm - 8:30pm',
        },
      ]
    },
    {
      date: 'Sunday, February 18',
      events: [
        {
          name: 'Singles Event',
          detail: '',
          more: '',
          time: '10am - 1pm',
        },
        {
          name: 'Scratch Masters',
          detail: '',
          more: '',
          time: '2pm - 5pm',
        },
      ]
    },
  ]

  return (
    <section className={styles.Schedule} id={'section-schedule'}>
      <h3 className={`section-heading`}>
        Schedule of Events
      </h3>
      <p className={`${styles.Disclaimer}`}>
        (All times subject to change)
      </p>

      {days.map((day, i) => (
        <div key={`day_${i}`}
             className={`row g-0 ${styles.DayOfEvents}`}>
          <div className={`${styles.Date} col-md-3`}>
            <h4>
              {day.date}
            </h4>
          </div>

          <div className={`col-md-9`}>
            {day.events.map((e, j) => (
              <div key={`event_${j}`}>
                <div className={`${styles.Event} d-flex justify-content-between`}>
                  <div className={`${styles.Detail}`}>
                    <h5>
                      {e.name}
                    </h5>
                    {e.detail && (
                      <p>
                        {e.detail}
                      </p>
                    )}
                  </div>
                  <div className={`${styles.Time}`}>
                    <h5>
                      {e.time}
                    </h5>
                  </div>
                </div>

                {j+1 < day.events.length && <hr />}
              </div>
            ))}
          </div>

        </div>
      ))}

      <div className={`section-image-background ${styles.BackgroundImage}`}></div>
      <div className={`section-background-shade ${styles.BackgroundShade}`}></div>
    </section>
  )
}

export default Schedule;
