export const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />{' '}
        </Link>

        <ul className="main-nav">
          <li>
            <Link className="main-nav__link" to="/hypoteka">
              Appka HYPOŠKA
            </Link>
          </li>
          <li>
            <Link className="main-nav__link" to="/kviz">
              Kvíz
            </Link>
          </li>
          <li>
            <Link className="main-nav__link" to="/mapa">
              Mapa
            </Link>
          </li>
          <li>
            <Link className="main-nav__link" to="/bonus">
              Bonusy
            </Link>
          </li>
          <li>
            <Link className="main-nav__link" to="/kontakt">
              Kontakty
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
