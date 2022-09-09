import express from 'express';
import { UserHr } from '../db/models';

const router = express.Router();

router.post('/login', async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  const currUser = await UserHr.findOne({ where: { email } });
  if (password === currUser.passwd) {
    req.session.userId = currUser.id;
    req.session.userEmail = currUser.email;
    req.session.userFirstName = currUser.firstName;
    req.session.userLastName = currUser.lastName;
    req.session.userSession = { email: currUser.email, isAdmin: currUser.admin };
    res.json({ email: currUser.email, isAdmin: currUser.admin });
  } else {
    res.sendStatus(401);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
});

export default router;
