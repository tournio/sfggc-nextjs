import styles from './RegisterCTA.module.scss';

const REGISTER_URL = 'https://www.tourn.io/tournaments/sfggc-2024';

const RegisterCTA = () => (
  <div className={styles.RegisterCTA}>
    <p>
      <a href={REGISTER_URL}
         className={`btn btn-lg btn-success`}
      >
        Register Online
      </a>
    </p>
  </div>
)

export default RegisterCTA;
