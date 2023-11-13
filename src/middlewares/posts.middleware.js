const PostsModel = require("../models/posts.model");

const validatePost = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const [post] = await PostsModel.selectPostById(postId);
    if (!post.length) {
      return res.json({
        fatal: `Post no encontrado`,
      });
    }
    next();
  } catch (error) {
    res.json({
      fatal: error.message,
    });
  }
};

module.exports = { validatePost };
