import React from 'react';
import TemplateCard from './TemplateCard';

export default function Templates({ checklists }) {
  return (
    <div className="container">
      <div className="row">
        {checklists ? checklists.map((el) => <TemplateCard template={el} key={el.id} />) : 'Никаких листков адаптации еще нет.'}
      </div>
    </div>
    // <nav aria-label="Page navigation example">
    //   <ul className="pagination pagination-lg justify-content-center">
    //     {checklists.map((el) => (
    //       <li key={el} className="page-item">
    //         Шаблон адаптации
    //         {' '}
    //         {el.firstName}
    //         {' '}
    //         {el.lastName}
    //         {' '}
    //         его наставник
    //         {' '}
    //         {el.menthorName}
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
    // <main role="main">
    //   <ul className="entries-list no-bullets no-padding">
    //     {checklists?.map((el) => <TemplateCard key={el.id} template={el} />)}
    //   </ul>
    // </main>
  );
}
