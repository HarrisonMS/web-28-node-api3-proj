const express = require('express');
const Users = require("./userDb")
const Posts = require('../posts/postDb')
const router = express.Router();
const { validateUserId } = require('../middleware/validateUserId')
const { validateUser } = require('../middleware/validateUser')
const { checkRole } = require('../middleware/checkRole')
const { validatePost } = require('../middleware/validatePost')


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

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  Posts
  .insert(req.body)
  .then(post => {
    res.status(201).json(post)
  })
  .catch((error) => {
    res.status(500).json({error})
  })
});

router.get('/', checkRole('admin'),  (req, res) => {
  Users.get().then(users => {
    res.status(200).json(users)
  })
  .catch((error) => {
    res.status(500).json(error)
  })
  // do your magic!
});
router.get('/:id',validateUserId, (req, res) => {
  res.status(200).json(req.user);
});

router.get('/:id/posts',validateUserId, (req, res) => {
  Users
  .getUserPosts(req.user.id)
  .then(posts => {
    res.status(200).json(posts)
  })
  .catch(() => {
    easyErr(500, "cant get this users post from the data base", res)
  })
});

router.delete('/:id',  validateUserId, (req, res) => {
  Users.remove(req.params.id)
  .then(removed => {
    res.status(200).json(`message: you just killed ${removed} user mourn them you animal`)
  })
  .catch((error) => {
    res.status.json(error)
  })
});

router.put('/:id', validateUserId, validateUser, (req, res) => {
  id = req.params.id
  changed = req.body
  Users.update(id, changed)
  .then(post => {
    res.status(200).json(post)
  })
  .catch((error) => {
    res.status.json(error)
  })

});
module.exports = router;
