import styles from './Schedule.module.scss';

const Schedule = () => {

  const days = [
    {
      date: 'Friday, February 14',
      events: [
        {
          name: 'Tournament Check-in',
          detail: 'Bowling center meeting room',
          more: '',
          time: '6pm - 7:45pm',
        },
        {
          name: '9-pin No-tap',
          detail: 'Classic Bowling Center',
          more: '$35 entry fee, open to all',
          time: '8pm - 10pm',
        },
      ]
    },
    {
      date: 'Saturday, February 15',
      events: [
        {
          name: 'Tournament Check-in',
          detail: 'Bowling center meeting room',
          more: '',
          time: '12pm - 1:45pm',
        },
        {
          name: 'Doubles and Singles Events',
          detail: '30-minute break between events',
          // more: 'We&apos;ll provide food between events!',
          time: '2:30pm - 8:30pm',
        },
      ]
    },
    {
      date: 'Sunday, February 16',
      events: [
        {
          name: 'Team Event',
          detail: '',
          more: '',
          time: '10am - 1pm',
        },
        {
          name: 'Cocktails & Results',
          detail: 'Classic Bowling Center',
          // more: 'We&apos;ll provide food between the Team event and Scratch Masters!',
          time: '1pm - 2pm',
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

      // {days.map((day, i) => (
      //   <div key={`day_${i}`}
      //        className={`row g-0 ${styles.DayOfEvents}`}>
      //     <div className={`${styles.Date} col-md-4`}>
      //       <h4>
      //         {day.date}
      //       </h4>
      //     </div>

      //     <div className={`col-md-8`}>
      //       {day.events.map((e, j) => (
      //         <div key={`event_${j}`}>
      //           <div className={`${styles.Event} d-flex justify-content-between`}>
      //             <div className={`${styles.Detail}`}>
      //               <h5>
      //                 {e.name}
      //               </h5>
      //               {e.detail && (
      //                 <p>
      //                   {e.detail}
      //                 </p>
      //               )}
      //               {e.more && (
      //                 <p className={styles.More}>
      //                   {e.more}
      //                 </p>
      //               )}
      //             </div>
      //             <div className={`${styles.Time}`}>
      //               <h5>
      //                 {e.time}
      //               </h5>
      //             </div>
      //           </div>

      //           {j+1 < day.events.length && <hr />}
      //         </div>
      //       ))}
          </div>

        </div>
      ))}

      <div className={`section-image-background ${styles.BackgroundImage}`}></div>
      <div className={`section-background-shade ${styles.BackgroundShade}`}></div>
    </section>
  )
}

export default Schedule;
