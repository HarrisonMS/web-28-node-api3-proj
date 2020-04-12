const express = require('express');
const Posts = require('../posts/postDb')
const router = express.Router();


router.get('/', (req, res) => {
  Posts.get().then(posts => {
    res.status(201).json(posts)
  })
});

router.get('/:id', (req, res) => {
  const postId = req.params.id || req.body.post_id;
  Posts.getById(postId).then(post => {
    res.status(201).json(post)
  })
  .catch((error) => {
    res.status.json(error)
  })
  
});

router.delete('/:id', (req, res) => {
  const postId = req.params.id || req.body.post_id
  Posts.remove(postId).then(removed => {
    res.status(200).json(`message: you just killed ${removed} post mourn them you animal`)
  })
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
