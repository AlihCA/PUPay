import { isAdmin } from "../middleware/roleMiddleware.js";
import express from "express";

import {
  createAnnouncement,
  getAllAnnouncements,
  getAnnouncementById,
  updateAnnouncement,
  deleteAnnouncement,
} from "../controllers/announcementController.js";

const router = express.Router();


router.post("/", isAdmin, createAnnouncement);


router.get("/", getAllAnnouncements);


router.get("/:id", getAnnouncementById);

router.put("/:id", isAdmin, updateAnnouncement);

router.put("/:id", isAdmin, updateAnnouncement);

export default router;