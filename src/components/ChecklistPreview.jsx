import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ChecklistPreview({ list }) {
  const { url } = useParams();
  const [inputs, setInputs] = useState({ q1: false });
  const changeHandler = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  useEffect(() => {
    (async () => {
      const resp = await fetch(`/api/v1/${url}`);
      const result = await resp.json();
      setInputs(result);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/v1/${url}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
    })();
  }, [inputs]);
  // text-decoration: line-through
  return (
    <div className="container">
      <form>
        <div className="d-grid gap-4 p-3">
          <div>
            Листок адаптации
            <p className="text-start text-success" style={{ marginBottom: '4px' }}>
              {' '}
              {`Сотрудник ${list?.userName}`}
            </p>
          </div>
          <div className="vstack p-3">
            <p className="fw-bold">Нужно подготовить твое рабочее место:</p>
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <div name="q1" onChange={changeHandler} style={{textDecoration: {`${list.q1} ? 'line-through' : ''`}}}checked={inputs.q1} className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  Наставник выдал мне пропуск
                </div>
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <div name="q2" onChange={changeHandler} checked={inputs.q2} className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  Наставник сообщил пароль от Wi-Fi
                </div>
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <div name="q3" onChange={changeHandler} checked={inputs.q3} className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  Системный администратор выдал мне ноутбук
                </div>
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <div name="q4" onChange={changeHandler} checked={inputs.q4} className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  Системный администратор выдал мне доступы к почте
                </div>
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <div name="q5" onChange={changeHandler} checked={inputs.q5} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии
              </label>
            </div>
          </div>

          <div className="vstack p-3">
            <p className="fw-bold">
              Важно познакомиться с коллегами:
            </p>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <div name="q6" onChange={changeHandler} checked={inputs.q6} className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  Ты познакомился (-ась) со своим руководителем
                </div>
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <div name="q7" onChange={changeHandler} checked={inputs.q7} className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  Ты написал(-а) сообщение в командный чат
                </div>
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <div name="q8" onChange={changeHandler} checked={inputs.q8} className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  Напиши имена трех твоих коллег по отделу:
                </div>
              </label>
            </div>
          </div>

          <div className="vstack p-3">
            <p className="fw-bold">
              Важно пройти оформление в отделе кадров:
            </p>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <div name="q9" onChange={changeHandler} checked={inputs.q9} className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  Ты отправил (-а)  сканы документы на оформление в отдел кадров
                </div>
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <div name="q10" onChange={changeHandler} checked={inputs.q10} className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  Ты подписал (-а) соглашение о коммерческой тайне
                </div>
              </label>
            </div>
          </div>

          <div className="vstack p-3">
            <p className="fw-bold">
              А теперь самое время работать:
            </p>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <div name="q11" onChange={changeHandler} checked={inputs.q11} className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  Получи свою первую задачу у руководителя
                </div>
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <div name="q12" onChange={changeHandler} checked={inputs.q12} className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  Создай подпись в почте по корпоративному шаблону
                </div>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChecklistPreview;
