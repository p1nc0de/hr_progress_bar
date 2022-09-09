import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddNewEmployee({ setNewEmp }) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ userName: '', menthorName: '' });
  const [notNew, setNotNew] = useState(false);
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch('/employees/new', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    if (response.ok) {
      const data = await response.json();
      setNotNew(false);
      setInputs({ userName: '', menthorName: '' });
      setNewEmp(data);
      console.log(data);
      // navigate(`/employees/${newEmp.id}`);
      window.location = `/employees/${data.id}`;
    } else if (response.status === 406) {
      setNotNew(true);
      setInputs({ userName: '', menthorName: '' });
    }
  };
  return (
    <div className="text-center">
      <h1>Создание листка адаптации</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Имя нового сотрудника
            <input type="text" name="userName" value={inputs.userName} onChange={inputHandler} className="form-control" id="exampleInputEmail1" />
          </label>
          {notNew === true && <div id="emailHelp" className="form-text">Для такого сотрудника уже существует лист адаптации или какое-то из полей осталось пустым</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Имя ментора нового сотрудника
            <input type="text" name="menthorName" value={inputs.menthorName} onChange={inputHandler} className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Создать</button>
      </form>
    </div>
  );
}
