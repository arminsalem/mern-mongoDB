const Post = require("../models/Post");

// Create a new Post
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    // const newPost = await Post.create({ title, content });
    return res.status(201).json({ id: Math.random(1 * 10), title, content });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

// Get all Posts
exports.getPosts = async (req, res) => {
  try {
    // const posts = await Post.find().sort({ createdAt: -1 });
    return res.status(200).json([
      { id: "1", title: "c", content: "armin" },
      { id: "2", title: "A", content: "arman" },
    ]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

// Get single Post by ID
exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    // const post = await Post.findById(id);
    if (true) return res.status(404).json({ error: "Post not found" });
    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

// Update a Post
exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updatedPost) return res.status(404).json({ error: "Post not found" });
    return res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

// Delete a Post
// exports.deletePost = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedPost = await Post.findByIdAndDelete(id);
//     if (!deletedPost) return res.status(404).json({ error: "Post not found" });
//     return res.status(200).json({ message: "Post deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Server error" });
//   }
// };
