import React from 'react';
import TemplateCard from './TemplateCard';

export default function Templates({ checklists }) {
  return (
    <div className="container">
      <div className="row">
        {checklists ? checklists.map((el) => <TemplateCard template={el} key={el.id} />) : 'Никаких листков адаптации еще нет.'}
      </div>
    </div>
  );
}
