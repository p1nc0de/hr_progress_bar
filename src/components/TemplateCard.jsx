import React from 'react';
import { Link } from 'react-router-dom';
import progressCounter from '../utils/progressCounter';

export default function TemplateCard({ template }) {
  const clickHandler = (e) => {

  };
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Лист адаптации</h5>
          <p className="card-text">{`Сотрудник: ${template.userName}`}</p>
          <p className="card-text">{`Наставник: ${template.menthorName}`}</p>
          <p className="card-text">{`Прогресс: ${progressCounter(template)} %`}</p>
          <button type="button" onClick={clickHandler} className="btn btn-primary">Посмотреть лист</button>
        </div>
      </div>
    </div>
  );
}
