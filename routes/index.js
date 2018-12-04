const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/', (req, res, next) => {
  const { username } = req.body;
  req.app.locals.loggedUser = username;
  res.redirect('/chat');
});

router.get('/chat', (req, res, next) =>  {
  res.render('chat');
});

router.post('/chat', (req, res, next) => {
  const { message } = req.body;
  const { loggedUser } = req.app.locals;
  // res.send(`The user ${loggedUser} says ${message}`);
})

module.exports = router;