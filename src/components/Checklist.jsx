import React from 'react';

//
function Checklist({ list }) {
  return (
    <div className="mx-auto" style={{ width: '940px' }}>
      <p className="fs-5 text">
        <p className="lh-1">
          <p className="text-start">
            Привет,
            {' '}
            {list.userName}
          </p>
          <p className="text-start">
            И добро пожаловать в команду Высокогорья!
          </p>
          <p className="text-start">
            Впереди нас ждет интересное путешествие в мир нашей компании,
            и самым главным проводником будет -
            {' '}
            {list?.menthorName}
          </p>
        </p>
      </p>
      <p className="fs-6">
        Мы подготовили для тебя чек-лист на первый день.
        Процесс выполнения будет сохраняться, поэтому ты можешь
        закрывать пункты в удобном для тебя порядке.
      </p>
      <div>
        Нужно подготовить твое рабочее место:
        <div className="form-check">

          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Наставник выдал мне пропуск
          </label>
        </div>
      </div>
    </div>
  );
}

export default Checklist;
