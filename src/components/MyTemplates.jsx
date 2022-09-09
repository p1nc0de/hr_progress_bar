import React from 'react';
import TemplateCard from './TemplateCard';

export default function MyTemplates({ myChecklists }) {
  return (
    <div className="container">
      <div className="row">
        {myChecklists ? myChecklists.map((el) => <TemplateCard template={el} key={el.id} />) : 'Никаких листков адаптации еще нет.'}
      </div>
    </div>
  );
}
