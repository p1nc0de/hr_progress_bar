import React from 'react';

//
function Checklist({ list }) {
  return (
    <form>
      <div className="d-grid gap-4 p-3">
        <p className="lh-sm">
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
        </p>
        <div className="vstack p-3">
          <p className="fw-bold">Нужно подготовить твое рабочее место:</p>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Наставник выдал мне пропуск
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Наставник сообщил пароль от Wi-Fi
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Системный администратор выдал мне ноутбук
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Системный администратор выдал мне доступы к почте
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии
            </label>
          </div>
        </div>

        <div className="vstack p-3">
          <p className="fw-bold">
            Важно познакомиться с коллегами:
          </p>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Ты познакомился (-ась) со своим руководителем
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Ты написал(-а) сообщение в командный чат
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Напиши имена трех твоих коллег по отделу:
            </label>
          </div>
        </div>

        <div className="vstack p-3">
          <p className="fw-bold">
            Важно пройти оформление в отделе кадров:
          </p>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Ты отправил (-а)  сканды документы на оформление в отдел кадров
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Ты подписал (-а) соглашение о коммерческой тайне
            </label>
          </div>
        </div>

        <div className="vstack p-3">
          <p className="fw-bold">
            Важно познакомиться с коллегами:
          </p>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Ты познакомился (-ась) со своим руководителем
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Ты написал(-а) сообщение в командный чат
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Напиши имена трех твоих коллег по отделу:
            </label>
          </div>
        </div>

        <div className="vstack p-3">
          <p className="fw-bold">
            А теперь самое время работать:
          </p>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Получи свою первую задачу у руководителя
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
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
  );
}

export default Checklist;
