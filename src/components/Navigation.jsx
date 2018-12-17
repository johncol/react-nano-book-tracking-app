import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="/">
        My Book Tracking App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/shelves">
              Shelves
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/search-books">
              Search books
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/manage-shelves">
              Manage Shelves
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
