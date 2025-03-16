import express from "express";
import { getVideo,getComments, updateVideo, addComment, deleteComment } from "../controlller/youtube.js";

const router = express.Router();

router.get('/video', getVideo);
router.put('/video/title', updateVideo);
router.post('/comment', addComment);
router.get('/comments', getComments);  // 👉 Fetch all comments
router.delete('/comment/:id', deleteComment);

export default router;
