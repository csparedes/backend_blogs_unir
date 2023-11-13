const router = require("express").Router();
const AutoresController = require("../../controllers/autores.controller");
const AutoresMiddleware = require("../../middlewares/autores.middleware");

router.get("/", AutoresController.getAuthors);

router.get("/posts", AutoresController.getAuthorsPosts);

router.get(
  "/posts/:authorId",
  AutoresMiddleware.validateAuthor,
  AutoresController.getAuthorPosts
);

router.get("/page", AutoresController.getAuthorsByPage);

router.get(
  "/:authorId",
  AutoresMiddleware.validateAuthor,
  AutoresController.getAuthorById
);
router.post("/", AutoresController.createAuthor);
router.put(
  "/:authorId",
  AutoresMiddleware.validateAuthor,
  AutoresController.updateAuthor
);
router.delete(
  "/:authorId",
  AutoresMiddleware.validateAuthor,
  AutoresController.deleteAuthor
);

module.exports = router;
