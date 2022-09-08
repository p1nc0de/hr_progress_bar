import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../components/Layout';

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

export default router;