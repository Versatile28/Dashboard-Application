import { express } from 'express';
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifytoken } from '../middleware/auth.js';


const router = express.router();

/* READ */

router.get("/", verifytoken, getFeedPosts);
router.get("/:userId/posts", verifytoken, getUserPosts);

/* UPDATE */

router.patch("/:id", verifytoken, likePost);

export default router;