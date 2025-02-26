import styles from './Results.module.scss';

const Results = () => {
  const available = [
    [
      { id: 'doubles', name: 'Doubles Event' },
      { id: 'singles', name: 'Singles Event' },
      { id: 'team', name: 'Team Event' },
      { id: 'all_events', name: 'All Events' },
      { id: 'scratch_masters', name: 'Scratch Masters' },
      { id: 'best_3_of_9', name: 'Best 3 of 9' },
      // { id: 'shadow_team', name: 'Shadow Team' },
      { id: 'golden_mystery_doubles', name: 'Golden Mystery Doubles' },
      { id: 'valentine_3somes', name: 'Valentine 3somes' },
      { id: 'optional_scratch', name: 'Optional Scratch' },
    ],
  ];

  return (
    <section className={`${styles.Results}`}>
      <h3 className={`section-heading`}>
        2025 Tournament Results
      </h3>

      <div className={'row px-2 px-xl-0'}>
        {available.map((resultSet, i) => (
          <div className={`col col-lg-6`} key={i}>
            <div className={`${styles.ResultsCard} card mb-2`}>
              <ul className={`list-group list-group-flush ${styles.ResultList}`}>
                { resultSet.map((result, j) => {
                  return (
                    <li key={j} className={`list-group-item ${styles.ResultItem} d-flex justify-content-between`}>
                      <a href={`/results/2025/${result.id}.pdf`}
                         className={`link-info mt-2`}>
                        {`${result.name}`}
                      </a>
                      <a className={`btn btn-outline-info`}
                              href={`/results/2025/${result.id}.pdf`}
                              title='Download PDF'>
                        <i className={`bi-download`} aria-hidden={true}></i>
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
