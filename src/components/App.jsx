import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Checklist from './Checklist';
import Home from './Home';
import Navbar from './navbar/Navbar';
import Templates from './Templates';
import MyTemplates from './MyTemplates';
import AddNewEmployee from './AddNewEmployee';

function App({ lists, myLists, list }) {
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
        <Route path="/checklists/:id" element={<Checklist list={list} />} />
      </Routes>
    </>
  );
}

export default App;
