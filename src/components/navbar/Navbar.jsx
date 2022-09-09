import React from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';

export default function Navbar({
  setChecklists, setMyChecklists, user, setUser, isAdmin, userId,
}) {
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/users/logout');
    if (response.ok) {
      setUser(null); // добавить
      navigate('/');
    }
  };
  const clickHandlerAll = async (e) => {
    e.preventDefault();
    fetch('/api/v1/templates')
      .then((res) => res.json())
      .then((data) => setChecklists(data))
      .then(() => navigate('/templates'));
  };
  // const clickHandlerMy = async (e) => {
  //   e.preventDefault();
  //   fetch(`/api/v1/templates/${user}`)
  //     .then((res) => res.json())
  //     .then((data) => setMyChecklists(data));
  // };

  const clickHandler = async (e) => {
    e.preventDefault();
    fetch('/api/v1/templates')
      .then((res) => res.json())
      .then((data) => setMyChecklists(data))
      .then(() => navigate('/templates'));
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link onClick={clickHandler} className="navbar-brand" to="/templates">
          <img src="/logo.png" alt="" width="30" height="26" style={{ 'margin-right': '10px' }} className="d-inline-block align-text-top" />
          Высокая гора
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {user
            && (
            <>
              <li className="nav-item">
                <Link onClick={clickHandlerAll} className="nav-link" to="/templates">Все листки адаптации</Link>
              </li>
              <li className="nav-item">
                <Link onClick={clickHandlerAll} className="nav-link" to="/templates">Мои листки адаптации</Link>
              </li>
              {isAdmin && (
              <li className="nav-item">
                <Link className="nav-link" to="/checklists/:id">Пользователи</Link>
              </li>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/employees/new">Добавить листки адаптации</Link>
              </li>
              <button type="button" className="btn btn-secondary" onClick={logoutHandler}>Logout</button>
            </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
