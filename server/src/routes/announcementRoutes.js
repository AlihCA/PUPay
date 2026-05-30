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

// ========================================
// FUTURE API
// GET /api/announcements
// POST /api/announcements
// PUT /api/announcements/:id
// DELETE /api/announcements/:id
// ========================================

router.post("/", isAdmin, createAnnouncement);
router.get("/", getAllAnnouncements);
router.get("/:id", getAnnouncementById);
router.put("/:id", isAdmin, updateAnnouncement);
router.delete("/:id", isAdmin, deleteAnnouncement);

export default router;