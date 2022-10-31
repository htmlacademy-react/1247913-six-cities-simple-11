import { Link, Outlet } from 'react-router-dom';
import { AppRoute } from '../const';

type layoutProps = {
  isAuth: boolean;
  classes: string;
}

function Layout({ isAuth, classes }: layoutProps) {
  return (
    <div className={classes}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Root} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            {isAuth ? (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <div className="header__nav-profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </div>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>)
              : (
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile" >
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__login">Sign in</span>
                      </Link>
                    </li>
                  </ul>
                </nav>)}

          </div>
        </div>
      </header>
      {/* <main> */}
      <Outlet />
      {/* </main> */}
    </div>
  );
}

export default Layout;
