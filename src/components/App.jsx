import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Checklist from './Checklist';
import Home from './Home';
import Navbar from './navbar/Navbar';
import Templates from './Templates';
// import MyTemplates from './MyTemplates';

function App({ checklists, list }) {
  return (
    <>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/templates" element={<Templates checklists={checklists} />} />
        <Route path="/checklists/:id" element={<Checklist list={list} />} />
        {/* <Route path="/templates/:userId" element={<MyTemplates />} />
        <Route path="/templates/" element={<MyTemplates />} /> */}
      </Routes>
    </>
  );
}

export default App;
