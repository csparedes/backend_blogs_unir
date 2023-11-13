const router = require("express").Router();

const PostsController = require("../../controllers/posts.controller");
const PostsMiddleware = require("../../middlewares/posts.middleware");

router.get("/", PostsController.getPosts);
router.get(
  "/:postId",
  PostsMiddleware.validatePost,
  PostsController.getPostById
);
router.post("/", PostsController.createPost);
router.put(
  "/:postId",
  PostsMiddleware.validatePost,
  PostsController.updatePost
);
router.delete(
  "/:postId",
  PostsMiddleware.validatePost,
  PostsController.deletePost
);

module.exports = router;
