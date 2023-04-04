import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
        <nav class="navbar navbar-expand-lg bg-body-tertiary" id="mainNav">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#" id="logo">Logo here</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav">
        <Link to="/">
            <li class="nav-item">
              <a class="nav-link active text-light" aria-current="page" href="#">HOME</a>
            </li>
        </Link>
        <Link to="projects">
            <li class="nav-item">
              <a class="nav-link text-light" href="#">PROJECTS</a>
            </li>
        </Link>
        <Link to="clientservices">
        <li class="nav-item">
          <a class="nav-link text-light" href="#">CLIENT SERVICES</a>
        </li>
        </Link>
        <Link to="about">
          <li class="nav-item">
            <a class="nav-link text-light" href="#">ABOUT</a>
          </li>
        </Link>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">CONTACT</a>
        </li>
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  );
}

export default Nav;