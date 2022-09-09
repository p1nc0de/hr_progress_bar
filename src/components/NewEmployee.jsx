import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function newEmployee({ newEmp }) {
  return (
    <div>
      <h1>{`Лист для сотрудника ${newEmp.userName}:`}</h1>
      <h3><a href={`/${newEmp.uniqueUrl}`}>ССЫЛКА</a></h3>
    </div>
  );
}
