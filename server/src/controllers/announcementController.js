// ========================================
// FUTURE API
// GET /api/announcements
// POST /api/announcements
// PUT /api/announcements/:id
// DELETE /api/announcements/:id
// ========================================

// TODO:
// Replace in-memory storage with MySQL queries

import { successResponse, errorResponse } from "../utils/responseHelper.js";

let announcements = [];
let currentId = 1;

// CREATE
export const createAnnouncement = (req, res) => {
  const { title, message } = req.body;

  if (!title?.trim()) {
    return errorResponse(res, "Title is required", 400);
  }

  if (!message?.trim()) {
    return errorResponse(res, "Message is required", 400);
  }

  const newAnnouncement = {
    id: currentId++,
    title,
    message,
    createdBy: req.user?.role || "admin",
    createdAt: new Date(),
  };

  announcements.push(newAnnouncement);

  return successResponse(
    res,
    "Announcement created successfully",
    newAnnouncement,
    201
  );
};

// GET ALL
export const getAllAnnouncements = (req, res) => {
  return successResponse(
    res,
    "Announcements fetched successfully",
    announcements
  );
};

// GET BY ID
export const getAnnouncementById = (req, res) => {
  const { id } = req.params;

  const announcement = announcements.find((a) => a.id == id);

  if (!announcement) {
    return errorResponse(res, "Announcement not found", 404);
  }

  return successResponse(
    res,
    "Announcement found",
    announcement
  );
};

// UPDATE
export const updateAnnouncement = (req, res) => {
  const { id } = req.params;
  const { title, message } = req.body;

  const index = announcements.findIndex((a) => a.id == id);

  if (index === -1) {
    return errorResponse(res, "Announcement not found", 404);
  }

  if (!title && !message) {
    return errorResponse(res, "Nothing to update", 400);
  }

  if (title !== undefined && !title.trim()) {
    return errorResponse(res, "Title cannot be empty", 400);
  }

  if (message !== undefined && !message.trim()) {
    return errorResponse(res, "Message cannot be empty", 400);
  }

  announcements[index].title =
    title ?? announcements[index].title;

  announcements[index].message =
    message ?? announcements[index].message;

  return successResponse(
    res,
    "Announcement updated successfully",
    announcements[index]
  );
};

// DELETE
export const deleteAnnouncement = (req, res) => {
  const { id } = req.params;

  const index = announcements.findIndex((a) => a.id == id);

  if (index === -1) {
    return errorResponse(res, "Announcement not found", 404);
  }

  const deleted = announcements.splice(index, 1);

  return successResponse(
    res,
    "Announcement deleted successfully",
    deleted[0]
  );
};