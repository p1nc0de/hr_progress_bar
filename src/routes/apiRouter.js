import express from 'express';
import { UserHr } from '../db/models';

const router = express.Router();

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await UserHr.destroy({ where: { id } });
  res.sendStatys(200);
});
export default router;
