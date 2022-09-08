import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Checklist from './Checklist';
import Home from './Home';
import Navbar from './navbar/Navbar';
import Templates from './Templates';
import MyTemplates from './MyTemplates';
import AddNewEmployee from './AddNewEmployee';
import NewEmployee from './NewEmployee';

function App({
  lists, myLists, list, userEmail, newEmp,
}) {
  const [checklists, setChecklists] = useState(lists);
  const [myChecklists, setMyChecklists] = useState(myLists);
  const [user, setUser] = useState(userEmail || null);
  return (
    <>
      <Navbar setChecklists={setChecklists} setMyChecklists={setMyChecklists} />
      <Routes>
        <Route path="/" element={<Home checklists={checklists} setUser={setUser} />} />
        <Route path="/templates" element={<Templates checklists={checklists} setChecklists={setChecklists} />} />
        <Route path="/templates/:id" element={<MyTemplates myChecklists={myChecklists} setMyChecklists={setMyChecklists} />} />
        <Route path="employees/new" element={<AddNewEmployee setChecklists={setChecklists} setMyChecklists={setMyChecklists} />} />
        <Route path="employees/:id" element={<NewEmployee newEmp={newEmp} />} />
        <Route path="/checklists/:id" element={<Checklist list={list} />} />
      </Routes>
    </>
  );
}

export default App;
