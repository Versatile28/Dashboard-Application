import { express } from 'express';
import {
   getUser,
   getUserFriends,
   addRemoveFriend,
} from "../controllers/users.js";

import { verifytoken } from './../middleware/auth.js';
import { path } from 'path';

const router = express.Router();

/* READ */
router.get("/:id", verifytoken, getUser);
router.get("/:id/friends", verifytoken, getUserFriends);

/* UPDATE */
router.path("/:id/:friendId", verifytoken, addRemoveFriend);

export default router;