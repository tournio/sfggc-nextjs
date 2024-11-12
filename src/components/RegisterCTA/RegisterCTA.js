import styles from './RegisterCTA.module.scss';

const REGISTER_URL = 'https://go.signmeup.io/?eventid=18';

const RegisterCTA = () => (
  <div className={styles.RegisterCTA}>
    <p className={'my-5'}>
      <a href={REGISTER_URL}
         className={`btn btn-lg btn-success`}
      >
        Register Online
      </a>
    </p>
  </div>
)

export default RegisterCTA;
