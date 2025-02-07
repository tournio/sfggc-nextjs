import Image from "next/image";
import styles from './OilPattern.module.scss';
import oilPatImage from '../../images/Easy Street V2.jpg';

const OilPattern = () => {
  return (
  <section className={`${styles.OilPattern}`} id={'section-oilpattern'}>
    <h3 className={`section-heading`}>
      2025 Tournament Oil Pattern
    </h3>
    <div>
      <hr />
      <div className={`row d-flex justify-content-center flex-wrap pb-0`}>
        <div className={`col-6 col-md-5 col-lg-4`}>
          <Image src={oilPatImage}
                 alt={'2025 Oil Pattern'}
                 className={`img-fluid oilPattern-image`}/>
        </div>
        <p className={`col-12 text-center pt-3`}>
          <span>
            2025&nbsp;
          </span>
            <span className={'d-md-none pe-2'}>
            SF Golden Gate Classic
          </span>
            <span className={'d-none d-md-inline pe-2'}>
            Easy Street V2
          </span>
        </p>
      </div>
    </div>
  </section>  
  )
}

export default OilPattern;
