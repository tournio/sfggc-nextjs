import Link from "next/link";
import ColorModeToggler from "../ColorModeToggler/ColorModeToggler";
import {useRouter} from "next/router";

const Navigation = () => {
  // const router = useRouter();

  return (
    <div className={`navigation`}>
      <div className={`navbar navbar-expand-lg`}>
        <div className={`container-fluid`}>
          <button
            type={'button'}
            className={'navbar-toggler border-0'}
            data-bs-toggle={'collapse'}
            data-bs-target={'#navbarContent'}
            aria-controls={`navbarContent`}
            aria-expanded={false}
            aria-label={'Toggle navigation'}>
            <i className={'bi bi-list'} />
          </button>

          <ul className={`navbar-nav d-none d-lg-inline-block order-last`}>
            <ColorModeToggler className={'ms-auto d-inline-block'} />
          </ul>

          <div className={`collapse navbar-collapse`} id={'navbarContent'}>
            <ul className={`navbar-nav mb-2 mb-lg-0`}>
              <li className={`nav-item`}>
                <Link className={`nav-link`} href={'/#section-top'}>
                  Home
                </Link>
              </li>
              <li className={`nav-item`} title={'Registration is not yet open'}>
                <a className={`nav-link disabled`}
                   href={'#'}
                   onClick={() => {}}
                >
                  Register
                </a>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link`} href={'/#section-location'}>
                  Bowling Center
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link`}
                      href={'/#section-schedule'}
                >
                  Schedule
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link`} href={'/rules'}>
                  Rules
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link`} href={'/san-francisco'}>
                  San Francisco
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link`} href={'/#section-igbo-local'}>
                  IGBO Local
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link className={`nav-link`} href={'/committee'}>
                  Committee
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navigation;
