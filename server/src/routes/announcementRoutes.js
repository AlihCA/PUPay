import express from "express";
import { isAdmin } from "../middleware/roleMiddleware.js";

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
router.delete("/:id", isAdmin, deleteAnnouncement);

export default router;