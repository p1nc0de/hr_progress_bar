import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { generateRandomString } from 'generate-strings';
import Layout from '../components/Layout';
import { CheckList, UserHr } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = { path: req.originalUrl };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/templates', async (req, res) => {
  const lists = await CheckList.findAll({ order: [['id', 'DESC']] });
  const initState = {
    path: req.originalUrl, lists, userName: req.session.userSession?.email, admin: req.session.userSession?.isAdmin,
  };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/templates/:id', async (req, res) => {
  const { id } = req.params;
  const myLists = await CheckList.findAll({ where: { author_id: id } });
  const initState = {
    path: req.originalUrl, myLists, userName: req.session.userSession.email, admin: req.session.userSession.isAdmin,
  };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/checklists/:id', async (req, res) => {
  const { id } = req.params;
  const list = await CheckList.findByPk(id);
  const initState = {
    path: req.originalUrl, list, userName: req.session.userSession?.email, admin: req.session.userSession?.isAdmin,
  };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/employees/new', async (req, res) => {
  const initState = { path: req.originalUrl, userName: req.session.userSession?.email, admin: req.session.userSession?.isAdmin };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/employees/:id', async (req, res) => {
  const { id } = req.params;
  const newEmployee = await CheckList.findByPk(id);
  const initState = {
    path: req.originalUrl, newEmployee, userName: req.session.userSession?.email, admin: req.session.userSession?.isAdmin,
  };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/:uniqueUrl', async (req, res) => {
  const { uniqueUrl } = req.params;
  const list = await CheckList.findOne({ where: { uniqueUrl } });
  const initState = {
    path: req.originalUrl, list, userName: req.session.userSession?.email, admin: req.session.userSession?.isAdmin,
  };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/employees/new', async (req, res) => {
  try {
    const { userName, menthorName } = req.body;
    console.log(userName, menthorName);
    const [newEmployee, created] = await CheckList.findOrCreate({
      where: { userName },
      defaults: {
        userName,
        menthorName,
        author_id: res.locals.userId,
        uniqueUrl: generateRandomString(),
      },
    });
    if (created && newEmployee.userName !== '' && newEmployee.menthorName !== '') {
      res.json(newEmployee);
    } else {
      res.sendStatus(406);
    }
  } catch (error) {
    res.sendStatus(404);
  }
});

// router.get('/*', async (req, res) => {
//   const entryError = '??????-???? ?????????? ???? ?????? ?? ???? ?????????? ???? ???????????????????????? ????????????. ?????????? ???????????????? ???????????? ?? ?????????? - ???????????????? ?? ?????????????????????? HR.';
//   const initState = { path: req.originalUrl, entryError };
//   const layoutComponent = React.createElement(Layout, { initState });
//   const html = renderToString(layoutComponent);
//   res.write('<!DOCTYPE html>');
//   res.end(html);
// });

export default router;
