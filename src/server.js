import express from 'express';
import session from 'express-session';
import store from 'session-file-store';
import indexRouter from './routes/indexRouter';
import templateApiRouter from './routes/templateApiRouter';
import apiRouter from './routes/apiRouter';
import userApiRouter from './routes/userApiRouter';

require('dotenv').config();

// const PORT = process.env.DB_HOST || 3000;
const PORT = 3000;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.userEmail = req.session?.userEmail;
  res.locals.userId = req.session?.userId;
  next();
});

app.use('/', indexRouter);
app.use('/api/v1/templates', templateApiRouter);
app.use('/api/v1/users', userApiRouter);
app.use('/api/v1', apiRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
