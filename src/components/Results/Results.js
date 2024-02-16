import styles from './Results.module.scss';

const Results = () => {
  const available = [
    [
      { id: 'scratch_masters_qualifiers', name: 'Scratch Masters Qualifiers' },
      // { id: 'team', name: 'Team Event' },
      // { id: 'doubles', name: 'Doubles Event' },
      // { id: 'singles', name: 'Singles Event' },
      // { id: 'all_events', name: 'All Events' },
      // { id: 'optional_scratch', name: 'Optional Scratch' },
      // { id: 'scratch_masters', name: 'Scratch Masters Finals' },
    ],
  ];

  return (
    <section className={`${styles.Results}`}>
      <h3 className={`section-heading`}>
        2024 Tournament Results
      </h3>

      <div className={'row px-2 px-xl-0'}>
        {available.map((resultSet, i) => (
          <div className={`col col-lg-6`} key={i}>
            <div className={`${styles.ResultsCard} card mb-2`}>
              <ul className={`list-group list-group-flush ${styles.ResultList}`}>
                { resultSet.map((result, j) => {
                  return (
                    <li key={j} className={`list-group-item ${styles.ResultItem} d-flex justify-content-between`}>
                      <a href={`/results/2024/${result.id}.pdf`}
                         className={`${styles.ResultLink} mt-2`}>
                        {`${result.name}`}
                      </a>
                      <a className={`btn`}
                              href={`/results/2024/${result.id}.pdf`}
                              title='Download PDF'>
                        <i className="bi-download" aria-hidden={true}></i>
                      </a>
                    </li>
                  );
                }) }
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Results;
