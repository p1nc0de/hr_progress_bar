import { Router } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../components/Layout';
import { CheckList } from '../db/models';

const router = Router();

router.get('/', async (req, res) => {
  const checklists = await CheckList.findAll();
  console.log(checklists);
  console.log('TYPE!!');
  console.log(typeof (checklists));
  const initState = { path: req.originalUrl, checklists };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

export default router;
