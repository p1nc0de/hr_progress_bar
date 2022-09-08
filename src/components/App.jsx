import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './navbar/Navbar';
import Templates from './Templates';
// import MyTemplates from './MyTemplates';

function App({ checklists, userEmail}) {
  const [user, setUser] = useState(userEmail || null);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home checklists={checklists} setUser={setUser} />} />

        <Route path="/templates" element={<Templates checklists={checklists} />} />
        {/* <Route path="/templates/:userId" element={<MyTemplates />} />
        <Route path="/templates/" element={<MyTemplates />} /> */}
      </Routes>
    </>
  );
}

export default App;
