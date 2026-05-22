import express from "express";

import {
  createAnnouncement,
  getAllAnnouncements,
  getAnnouncementById,
  updateAnnouncement,
  deleteAnnouncement,
} from "../controllers/announcementController.js";

const router = express.Router();

// CREATE
router.post("/", createAnnouncement);

// READ ALL
router.get("/", getAllAnnouncements);

// READ ONE
router.get("/:id", getAnnouncementById);

// UPDATE
router.put("/:id", updateAnnouncement);

// DELETE
router.delete("/:id", deleteAnnouncement);

export default router;