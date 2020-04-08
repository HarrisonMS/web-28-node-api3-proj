function validateUser(req, res, next) {
  if(!req.body) {
    res.status(400)
    .json({message: 'missing user data'})
  }
  if(!req.body.name) {
    res.status(400)
    .json({message: 'missing required name field'})
  }
  next()
}

module.exports = {
  validateUser : validateUser
}

