import styles from './Mission.module.scss';

const Mission = () => (
  <section className={`${styles.Mission}`} id={'section-mission'}>
    <h3 className={`section-heading`}>
      Mission Statement
    </h3>
    <div className={'row'}>
      <p className={'col'}>
        To seamlessly integrate friendly competition that reflects the full diversity of the Bay Area, by creating an experience where every participant, regardless of background or skill level, feels welcomed and recognizes their own contribution to the spirit of the tournament and its success.
      </p>
    </div>
  </section>
);

export default Mission;
