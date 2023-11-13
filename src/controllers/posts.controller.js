const PostModel = require("../models/posts.model");

const getPosts = async (req, res) => {
  try {
    const [result] = await PostModel.getAllPosts();
    res.json(result);
  } catch (error) {
    res.json({
      fatal: `Error: ${error.message}`,
    });
  }
};

const getPostById = async (req, res) => {
  const { postId } = req.params;
  try {
    const [post] = await PostModel.selectPostById(postId);
    res.json(post);
  } catch (error) {
    res.json({
      fatal: `Error: ${error.message}`,
    });
  }
};

const createPost = async (req, res) => {
  try {
    const [result] = await PostModel.insertPost(req.body);
    const [post] = await PostModel.selectPostById(result.insertId);
    res.json(post[0]);
  } catch (error) {
    res.json({
      fatal: `Error: ${error.message}`,
    });
  }
};

const updatePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const [result] = await PostModel.updatePostById(postId, req.body);
    res.json(result);
  } catch (error) {
    res.json({
      fatal: `Error: ${error.message}`,
    });
  }
};

const deletePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const [result] = await PostModel.deletePostById(postId);
    res.json(result);
  } catch (error) {
    res.json({
      fatal: `Error: ${error.message}`,
    });
  }
};

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };
