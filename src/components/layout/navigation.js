import Link from "next/link";
import ColorModeToggler from "../ColorModeToggler/ColorModeToggler";
import {useRouter} from "next/router";

const Navigation = () => {
  // const router = useRouter();

  const dismissMenu = () => {
    const e = new KeyboardEvent('keydown', { key: 'Escape' });
    const elem = document.getElementById('navbarContent');
    // elem.dispatchEvent(e);
  }

  return (
    // <div className={`navigation`}>
      <nav className={`navbar navbar-expand-lg`}>
        <div className={`container-fluid`}>
          <button
            type={'button'}
            id={'navbarToggler'}
            className={'navbar-toggler'}
            data-bs-toggle={'offcanvas'}
            data-bs-target={'#navbarContent'}
            aria-controls={`navbarContent`}
            aria-expanded={false}
            aria-label={'Toggle navigation'}>
            <i className={`bi bi-list menu-icon`}></i>
          </button>

          <ul className={`navbar-nav d-none d-lg-inline-block order-last`}>
            <ColorModeToggler className={'ms-auto d-inline-block'} />
          </ul>

          <div className={`offcanvas offcanvas-start`}
               id={'navbarContent'}
               tabIndex={'-1'}
               data-bs-scroll={true}
               aria-labelledby={'navbarLabel'}>
            <div className={`offcanvas-header`}>
              <h5 className={`offcanvas-title`}
                  id={'navbarLabel'}>
                Menu
              </h5>
              <button type={'button'}
                      className={`btn-close btn-close-white`}
                      data-bs-dismiss={`offcanvas`}
                      aria-label={`Close`}>
              </button>
            </div>
            <div className={`offcanvas-body`}>
              <ul className={`navbar-nav mb-2 mb-lg-0`}>
                <li className={`nav-item`}>
                  <Link className={`nav-link`}
                        href={'/#tippy-top'}
                        onClick={dismissMenu}
                  >
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
                        onClick={dismissMenu}
                  >
                    Schedule
                  </Link>
                </li>
                <li className={`nav-item`} title={'Rules will be posted once they&apos;re ready!'}>
                  <Link className={`nav-link disabled`}
                        href={'/rules'}
                        onClick={dismissMenu}
                  >
                    Rules
                  </Link>
                </li>
                <li className={`nav-item`}>
                  <Link className={`nav-link`}
                        href={'/san-francisco'}
                        onClick={dismissMenu}
                  >
                    San Francisco
                  </Link>
                </li>
                <li className={`nav-item`}>
                  <Link className={`nav-link`}
                        href={'/#section-beneficiary'}
                        onClick={dismissMenu}
                  >
                    Charity Partner
                  </Link>
                </li>
                <li className={`nav-item`}>
                  <Link className={`nav-link`}
                        href={'/#section-igbo-local'}
                        onClick={dismissMenu}
                  >
                    IGBO Local
                  </Link>
                </li>
                <li className={`nav-item`}>
                  <Link className={`nav-link`}
                        href={'/committee'}
                        onClick={dismissMenu}
                  >
                    Committee
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </nav>
    // </div>
  )
}

export default Navigation;
