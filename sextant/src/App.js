import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor: 'transparent'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Sextant</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li> &nbsp; &nbsp; &nbsp;
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li> &nbsp; &nbsp; &nbsp;
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Software Engineers</a></li>
                  <li><a className="dropdown-item" href="#">QA Engineers</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Our Team</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
