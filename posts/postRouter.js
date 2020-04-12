const express = require('express');
const Posts = require('../posts/postDb')
const router = express.Router();


router.get('/', (req, res) => {
  Posts.get().then(posts => {
    res.status(201).json(posts)
  })
});

router.get('/:id', (req, res) => {
  const postId = req.params.id || req.body.user_id;
  Posts.getById(postId).then(post => {
    res.status(201).json(post)
  })
  .catch((error) => {
    res.status.json(error)
  })
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
