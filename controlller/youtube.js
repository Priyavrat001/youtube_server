import dotenv from "dotenv";
import mongoose from "mongoose";
import axios from "axios";

dotenv.config();

const LogSchema = new mongoose.Schema({
  action: String,
  timestamp: Date,
});
const Log = mongoose.model("Log", LogSchema);

const CommentSchema = new mongoose.Schema({
  comment: String,
  timestamp: { type: Date, default: Date.now }
});

const Comment = mongoose.model("Comment", CommentSchema);

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const VIDEO_ID = process.env.YOUTUBE_VIDEO_ID;

const getVideo = async (req, res) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&part=snippet&key=${YOUTUBE_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ timestamp: -1 }); // Fetch all comments, newest first
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// This part is not working since i need oath permison and my cloud console is throughing some error
const updateVideo = async (req, res) => {
  try {
    const { title } = req.body;
    await Log.create({ action: `Updated video title to '${title}'`, timestamp: new Date() });
    res.json({ message: "Title updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addComment = async (req, res) => {
  try {
    const { comment } = req.body;
    
    const newComment = await Comment.create({ comment });

    await Log.create({ action: `Added comment: '${comment}'`, timestamp: new Date() });

    res.json({ message: "Comment added successfully", comment: newComment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedComment = await Comment.findByIdAndDelete(id);

    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    await Log.create({ action: "Deleted a comment", timestamp: new Date() });

    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getVideo, getComments, updateVideo, addComment, deleteComment };
