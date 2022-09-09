import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home({ setUser, entryError }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: '', password: '' });
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = async (e) => {
    console.log(input);
    e.preventDefault();
    const response = await fetch('/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setUser(data.email);
      setInput({ email: '', password: '' });
      navigate('/api/v1/templates');
    }
  };
  return (
    <div className="text-center">
      <div className="card" style={{ width: '50rem', 'margin-left': '100px', padding: '60px' }}>
        <div className="card-body">
          <h5 className="card-title">Привет! Это корпоративный портал ООО “Высокая Гора”.</h5>
          <p className="card-text">Чтобы получить доступ к сайту - обратись в департамент HR.</p>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
                <input type="email" name="email" value={input.email} onChange={changeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
                <input type="password" name="password" value={input.password} onChange={changeHandler} className="form-control" id="exampleInputPassword1" />
              </label>
            </div>
            <button type="submit" className="btn btn-success">LogIn</button>
          </form>
        </div>
      </div>
    </div>
  );
}
