import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../components/Layout';
import { CheckList } from '../db/models';

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
  const initState = { path: req.originalUrl, lists };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/templates/:id', async (req, res) => {
  const { id } = req.params;
  const myLists = await CheckList.findAll({ where: { author_id: id } });
  const initState = { path: req.originalUrl, myLists };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/checklists/:id', async (req, res) => {
  const { id } = req.params;
  const list = await CheckList.findByPk(id);
  console.log(list.userName);
  const initState = { path: req.originalUrl, list };
  // const initState = { path: req.originalUrl };

  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/lists/:url', async (req, res) => {
  const { url } = req.params;
  const list = await CheckList.findOne({ where: { uniqueUrl: url } });
  const initState = { path: req.originalUrl, list };
  // const initState = { path: req.originalUrl };

  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

export default router;
