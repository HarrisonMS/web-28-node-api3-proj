function validateUserId(req, res, next) {
  const userId = req.params.id || req.body.user_id;
  Users
  .getById(userId)
  .then(user => {
    if (user) {
      req.user = user;
    return next()
    } else {
      easyErr(400, "that is not a valid id", res)
    }
  })
  .catch(() => {
    easyErr(500, "cant find that user in our data", res)
  })
}

module.exports = {
  validateUserId : validateUserId
}