import React from 'react';
import { Link } from 'react-router-dom';
import progressCounter from '../utils/progressCounter';

export default function TemplateCard({ template }) {
  const clickHandler = (e) => {
    // fetch(`/checklists/${template.id}`);
    window.location = `http://localhost:3000/checklists/${template.id}`;
  };
  let progress = progressCounter(template);
  const danger = (progress - 50) < 0 ? progress : 50;
  progress -= danger;
  let warning = 0;
  let success = 0;
  if (danger === 50 && progress) {
    warning = (progress - 25) < 0 ? progress : 25;
    progress -= warning;
  }
  if (warning === 25 && progress) {
    success = (progress - 25) < 0 ? progress : 25;
  }
  return (
    <div className="col-4" style={{ marginBottom: '20px' }}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Лист адаптации</h5>
          <p className="card-text">{`Сотрудник: ${template.userName}`}</p>
          <p className="card-text">{`Наставник: ${template.menthorName}`}</p>
          <p className="card-text">{`UniqueUrl: ${(template.uniqueUrl)}`}</p>
          <p className="card-text">{`Прогресс: ${progressCounter(template)} %`}</p>
          {/* <a type="button" onClick={clickHandler} className="btn btn-primary">Посмотреть лист</button> */}
          <div className="progress">
            <div className="progress-bar bg-danger" role="progressbar" aria-label="Segment one" style={{ width: `${danger}%` }} aria-valuemin="0" aria-valuemax="100" />
            <div className="progress-bar bg-warning" role="progressbar" aria-label="Segment two" style={{ width: `${warning}%` }} aria-valuemin="0" aria-valuemax="100" />
            <div className="progress-bar bg-success" role="progressbar" aria-label="Segment three" style={{ width: `${success}%` }} aria-valuemin="0" aria-valuemax="100" />
          </div>

        </div>
      </div>
    </div>
  );
}
