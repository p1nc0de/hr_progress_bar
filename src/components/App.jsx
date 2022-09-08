import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './navbar/Navbar';
import Templates from './Templates';
import MyTemplates from './MyTemplates';
import AddNewEmployee from './AddNewEmployee';

function App({ lists, myLists }) {
  const [checklists, setChecklists] = useState(lists);
  const [myChecklists, setMyChecklists] = useState(myLists);
  return (
    <>
      <Navbar setChecklists={setChecklists} setMyChecklists={setMyChecklists} />
      <Home />
      <Routes>
        <Route path="/templates" element={<Templates checklists={checklists} setChecklists={setChecklists} />} />
        <Route path="/templates/:id" element={<MyTemplates myChecklists={myChecklists} setMyChecklists={setMyChecklists} />} />
        <Route path="/add" element={<AddNewEmployee setChecklists={setChecklists} setMyChecklists={setMyChecklists} />} />
      </Routes>
    </>
  );
}

export default App;
