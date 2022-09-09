import { Router } from 'express';
import { CheckList } from '../db/models';

const router = Router();

router.get('/', async (req, res) => {
  const lists = await CheckList.findAll({ order: [['id', 'DESC']] });
  res.json(lists);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const myLists = await CheckList.findAll({ where: { email: id } });
  res.json(myLists);
});

export default router;
