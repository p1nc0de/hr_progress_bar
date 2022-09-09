import express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import Layout from '../components/Layout';
import { UserHr, CheckList } from '../db/models';

const router = express.Router();

// router.get('/checklists', async (req, res) => {
//   const initState = { path: req.originalUrl };
//   const layoutComponent = React.createElement(Layout, { initState });
//   const html = renderToString(layoutComponent);
//   res.write('<!DOCTYPE html>');
//   res.end(html);
// });
// router.post('/checklist', async (req, res) => {
//   const initState = { path: req.originalUrl };
//   const layoutComponent = React.createElement(Layout, { initState });
//   const html = renderToString(layoutComponent);
//   res.write('<!DOCTYPE html>');
//   res.end(html);
// });

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await UserHr.destroy({ where: { id } });
  res.sendStatus(200);
});

// для вывода сообщения после создания листка адаптации
router.get('/checklists/:id', async (req, res) => {
  const { id } = req.params;
  const list = await CheckList.findByPk(id);
  res.json(list);
});

router.post('/:uniqueUrl', async (req, res) => {
  const { uniqueUrl } = req.params;
  const changedQ = await CheckList.update({ ...req.body }, { where: { uniqueUrl } });
  res.sendStatus(200);
});

router.get('/:uniqueUrl', async (req, res) => {
  const { uniqueUrl } = req.params;
  const updatedList = await CheckList.findOne({ where: { uniqueUrl } });
  res.json(updatedList);
});

router.post('/names/:uniqueUrl', async (req, res) => {
  const { uniqueUrl } = req.params;
  const { name1, name2, name3 } = req.body;
  const changedQ = await CheckList.update({ tim1: name1, tim2: name2, tim3: name3 }, { where: { uniqueUrl } });
  res.sendStatus(200);
});

export default router;
