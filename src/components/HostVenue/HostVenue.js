import styles from './HostVenue.module.scss';

const HostVenue = () => (
  <section className={`${styles.HostVenue}`} id={'section-hostvenue'}>
    <h3 className={`section-heading`}>
      Host Venue
    </h3>
    <div className={'row'}>
      <p className={'col'}>
        The Pilsner Inn will be our Host Bar all Weekend.  Show up with your Tournament Badge to receive a $1 discount on drinks for the duration of the tournament.
      </p>
      <p>
        225 Church St.
      </p>
      <p>
        San Francisco, CA 94114
      </p>

    </div>
  </section>
);

export default HostVenue;