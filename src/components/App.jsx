import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Checklist from './Checklist';
import Home from './Home';
import Navbar from './navbar/Navbar';
import Templates from './Templates';
import MyTemplates from './MyTemplates';
import AddNewEmployee from './AddNewEmployee';
import NewEmployee from './NewEmployee';
import ChecklistPreview from './ChecklistPreview';

function App({
  lists, myLists, list, userEmail, userName, newEmployee, entryError, externalList, userId, admin
}) {
  const [checklists, setChecklists] = useState(lists);
  const [myChecklists, setMyChecklists] = useState(myLists);
  const [user, setUser] = useState(userName || null);
  const [newEmp, setNewEmp] = useState(newEmployee);
  const [isAdmin, setIsAdmin] = useState(admin || false);
  // const [authState, setAuthState] = useState(userSesion || null)
  return (
    <>
      <Navbar
        setChecklists={setChecklists}
        setMyChecklists={setMyChecklists}
        user={user}
        setUser={setUser}
        isAdmin={isAdmin}
        userId={userId}
      />
      <Routes>
        <Route path="/" element={<Home checklists={checklists} setUser={setUser} entryError={entryError} setIsAdmin={setIsAdmin} />} />
        <Route path="/templates" element={<Templates checklists={checklists} setChecklists={setChecklists} />} />
        <Route path="/templates/:id" element={<MyTemplates myChecklists={myChecklists} setMyChecklists={setMyChecklists} />} />
        <Route path="employees/new" element={<AddNewEmployee setNewEmp={setNewEmp} newEmp={newEmp} />} />
        <Route path="employees/:id" element={<NewEmployee newEmp={newEmp} />} />
        <Route path="/checklists/:id" element={<ChecklistPreview list={list} />} />

        <Route path="/:uniqueUrl" element={<Checklist list={list} />} />
      </Routes>
    </>
  );
}

export default App;
