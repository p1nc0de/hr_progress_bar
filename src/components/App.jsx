import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Checklist from '../db/models/checklist';
import Home from './Home';
import Navbar from './navbar/Navbar';
import Templates from './Templates';
// import MyTemplates from './MyTemplates';

function App({ checklists }) {
  return (
    <>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/templates" element={<Checklist checklists={checklists} />} />
        {/* <Route path="/templates/:userId" element={<MyTemplates />} />
        <Route path="/templates/" element={<MyTemplates />} /> */}
      </Routes>
    </>
  );
}

export default App;
