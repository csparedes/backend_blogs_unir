const router = require("express").Router();

router.use("/autores", require("./api/autores.api"));
router.use("/posts", require("./api/posts.api"));

module.exports = router;
