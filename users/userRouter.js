const express = require('express');
const Users = require("./userDb")
const router = express.Router();
const { validateUserId } = require('../middleware/validateUserId')
const { validateUser } = require('../middleware/validateUser')



router.post('/', validateUser, (req, res) => {
  const userData = req.body
  Users.insert(userData)
  .then(user => {
    res.status(201).json(user);
  })
  .catch(() => {
    res.status(500).json({message: 'unable to create and add a user to the database at the moment shrug'})
  })
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', validateUserId, (req, res) => {
  res.status(200).json(req.user);
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

// function validateUserId(req, res, next) {
//   // do your magic!
// }

// function validateUser(req, res, next) {
//   // do your magic!
// }

// function validatePost(req, res, next) {
//   // do your magic!
// }

module.exports = router;
