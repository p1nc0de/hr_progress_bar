import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    const response = await fetch('api/v1/user/logout');
    if (response.ok) {
      setUset(null);
      navigate('/');
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/">LOGOTIP</a> */}
        <a className="navbar-brand" href="/">
          <img src="/logo.png" alt="" width="30" height="26" style={{ 'margin-right': '10px' }} className="d-inline-block align-text-top" />
          Высокая гора
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/api/">Все листки адаптации</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Мои листки адаптации</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Пользователи</a>
            </li>
            <button type="button" className="btn btn-success" onClick={logoutHandler}>Logout</button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
