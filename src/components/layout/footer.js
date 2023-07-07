// import Image from "next/image";
// import logo from '../../images/damit.png';

const Footer = () => {
  return (
    <div>
      <hr />
      {/*<Image src={logo}*/}
      {/*       alt={'DAMIT logo'}*/}
      {/*       className={`img-fluid footer-image`}*/}
      {/*/>*/}
      <p className={'d-flex justify-content-center'}>
        <span>
          &copy; 2023&nbsp;
        </span>
        <span className={'d-md-none pe-2'}>
          SF Golden Gate Classic
        </span>
        <span className={'d-none d-md-inline pe-2'}>
          San Francisco Golden Gate Classic
        </span>
      </p>
    </div>
  )
}

export default Footer;
