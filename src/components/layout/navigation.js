import Link from "next/link";
import ColorModeToggler from "../ColorModeToggler/ColorModeToggler";
import {useRouter} from "next/router";

const Navigation = () => {
  const router = useRouter();

  const linkClicked = (event) => {
    event.preventDefault();
    console.log(event.target.href);
    router.push(event.target.href);
  }

  const navLink = ({path, text, title = '', disabled = false}) => (
    <li className={`nav-item`}
        title={title}>
      <Link className={`nav-link ${disabled ? 'disabled' : ''}`}
            href={path}
            onClick={linkClicked}
            data-bs-toggle={'collapse'}
            data-bs-target={'.navbar-collapse.show'}
      >
        {text}
      </Link>
    </li>
  );

  return (
      <nav className={`navbar navbar-expand-lg`}>
        <div className={`container-fluid`}>
          <button
            type={'button'}
            id={'navbarToggler'}
            className={'navbar-toggler'}
            data-bs-toggle={'collapse'}
            data-bs-target={'#navbarContent'}
            aria-controls={`navbarContent`}
            aria-expanded={false}
            aria-label={'Toggle navigation'}>
            <i className={`bi bi-list menu-icon`}></i>
          </button>

          <ul className={`navbar-nav d-none d-lg-inline-block order-last`}>
            <ColorModeToggler className={'ms-auto d-inline-block'} />
          </ul>

          <div className={`collapse navbar-collapse`}
               id={'navbarContent'}
               tabIndex={'-1'}>
              <ul className={`navbar-nav mb-2 mb-lg-0`}>
                {navLink({
                  path: '/',
                  text: 'Home',
                })}

                {navLink({
                  path: 'https://www.tourn.io',
                  text: 'Register',
                  disabled: true,
                  title: 'Registration is not yet open',
                })}

                {/*<li className={`nav-item`}>*/}
                {/*  <Link className={`nav-link`} href={'/#section-location'}>*/}
                {/*    Bowling Center*/}
                {/*  </Link>*/}
                {/*</li>*/}

                {/*<li className={`nav-item`}>*/}
                {/*  <Link className={`nav-link`}*/}
                {/*        href={'/#section-schedule'}*/}
                {/*  >*/}
                {/*    Schedule*/}
                {/*  </Link>*/}
                {/*</li>*/}

                {navLink({
                  path: '/rules',
                  text: 'Rules',
                  disabled: false,
                  title: '',
                })}

                {navLink({
                  path: '/results',
                  text: 'Results',
                  disabled: true,
                  title: 'Results are not yet available',
                })}


                {navLink({
                  path: '/san-francisco',
                  text: 'San Francisco',
                })}

                {/*<li className={`nav-item`}>*/}
                {/*  <Link className={`nav-link`}*/}
                {/*        href={'/#section-beneficiary'}*/}
                {/*  >*/}
                {/*    Charity Partner*/}
                {/*  </Link>*/}
                {/*</li>*/}

                {navLink({
                  path: '/committee',
                  text: 'Committee',
                })}
              </ul>
            {/*</div>*/}
          </div>

        </div>
      </nav>
    // </div>
  )
}

export default Navigation;
