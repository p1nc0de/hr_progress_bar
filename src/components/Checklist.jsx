import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//
function Checklist({ list }) {
  const { id } = useParams();
  const [inputs, setInputs] = useState({ q1: false });
  const changeHandler = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  useEffect(() => {
    (async () => {
      const resp = await fetch(`/api/v1/checklist/${id}`);
      const result = await resp.json();
      setInputs(result);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/v1/checklist/${id}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
    })();
  }, [inputs]);

  return (
    <div className="container">
      <form>
        <div className="d-grid gap-4 p-3">
          <div>
            Привет,
            <p className="text-start text-success">
              {' '}
              {list?.userName}
            </p>
            <p className="text-start">
              И добро пожаловать в команду
              {' '}
              <p className="text-success">Высокогорья!</p>
            </p>
            <p className="text-start">
              Впереди нас ждет интересное путешествие в мир нашей компании,
              и самым главным проводником будет -
              {' '}
              <p className="text-success">{list?.menthorName}</p>
            </p>
            <p className="fw-lighter">
              Мы подготовили для тебя чек-лист на первый день.
              Процесс выполнения будет сохраняться, поэтому ты можешь
              закрывать пункты в удобном для тебя порядке.
            </p>
          </div>
          <div className="vstack p-3">
            <p className="fw-bold">Нужно подготовить твое рабочее место:</p>
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q1" onChange={changeHandler} checked={inputs.q1} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Наставник выдал мне пропуск
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q2" onChange={changeHandler} checked={inputs.q2} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Наставник сообщил пароль от Wi-Fi
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q3" onChange={changeHandler} checked={inputs.q3} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Системный администратор выдал мне ноутбук
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q4" onChange={changeHandler} checked={inputs.q4} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Системный администратор выдал мне доступы к почте
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q5" onChange={changeHandler} checked={inputs.q5} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
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
                <input name="q6" onChange={changeHandler} checked={inputs.q6} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Ты познакомился (-ась) со своим руководителем
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q7" onChange={changeHandler} checked={inputs.q7} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Ты написал(-а) сообщение в командный чат
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q8" onChange={changeHandler} checked={inputs.q8} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Напиши имена трех твоих коллег по отделу:
              </label>
            </div>
          </div>

          <div className="vstack p-3">
            <p className="fw-bold">
              Важно пройти оформление в отделе кадров:
            </p>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q9" onChange={changeHandler} checked={inputs.q9} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Ты отправил (-а)  сканы документы на оформление в отдел кадров
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q10" onChange={changeHandler} checked={inputs.q10} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Ты подписал (-а) соглашение о коммерческой тайне
              </label>
            </div>
          </div>

          <div className="vstack p-3">
            <p className="fw-bold">
              А теперь самое время работать:
            </p>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q11" onChange={changeHandler} checked={inputs.q11} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Получи свою первую задачу у руководителя
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q12" onChange={changeHandler} checked={inputs.q12} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Создай подпись в почте по корпоративному шаблону
              </label>
            </div>
          </div>
          <p>
            Классного путешествия!
          </p>
          <p>
            Команда
            {' '}
            <p className="text-success">Высокой горы 💚</p>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Checklist;
