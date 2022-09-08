import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Templates from './Templates';
// import MyTemplates from './MyTemplates';

function App({ checklists }) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/templates" element={<Templates checklists={checklists} />} />
        {/* <Route path="/templates/:userId" element={<MyTemplates />} />
        <Route path="/templates/" element={<MyTemplates />} /> */}
      </Routes>
    </>
  );
}

export default App;
