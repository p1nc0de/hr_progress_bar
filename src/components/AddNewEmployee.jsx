import React from 'react';

export default function AddNewEmployee() {
  const submitHandler = () => {

  };
  return (
    <>
      <h1>Создание листка адаптации</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Имя нового сотрудника
            <input type="text" className="form-control" id="exampleInputEmail1" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Имя ментора нового сотрудника
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Создать</button>
      </form>
    </>
  );
}
