import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../components/Layout';
import { UserHr, CheckList } from '../db/models';

const router = express.Router();

router.get('/checklists', async (req, res) => {
  const initState = { path: req.originalUrl };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});
router.post('/checklist', async (req, res) => {
  const initState = { path: req.originalUrl };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

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

export default router;
