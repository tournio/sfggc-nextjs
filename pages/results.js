import React from 'react';

import Layout from "../components/layout";

import styles from './results.module.scss';

const results = () => {
  return (
    <Layout>
      <div className={styles.Results}>
        <h1 className="display-4">
          Tournament Results
        </h1>

        <h5 className="text-muted">
          Results will be posted here when they're available.
        </h5>

      </div>
    </Layout>
  );
};

export default results;
