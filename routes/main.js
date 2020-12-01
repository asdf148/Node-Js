const express = require('express');
const { Content } = require('../models');

const router = express.Router();

router.post('/write', async (req, res, next) => {
  try {
    await Content.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    return res.status(200).send("save success");
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;