import React, { useState } from 'react';

export default function AddNewEmployee() {
  const [inputs, setInputs] = useState({ userName: '', menthorName: '' });
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = () => {
    fetch('/employees/new', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
  };
  return (
    <>
      <h1>Создание листка адаптации</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Имя нового сотрудника
            <input type="text" name="userName" value={inputs.userName} onChange={inputHandler} className="form-control" id="exampleInputEmail1" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Имя ментора нового сотрудника
            <input type="text" name="menthorName" value={inputs.menthorName} onChange={inputHandler} className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <a type="submit" className="btn btn-primary" href="">Создать</a>
      </form>
    </>
  );
}

// `/${newEmp.uniqueUrl}`
