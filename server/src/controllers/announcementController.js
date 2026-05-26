import { successResponse, errorResponse } from "../utils/responseHelper.js";

let announcements = [];
let currentId = 1;

// CREATE
export const createAnnouncement = (req, res) => {
  const { title, message } = req.body;

  if (!title || !message) {
    return errorResponse(res, "Title and message are required", 400);
  }

  const newAnnouncement = {
    id: currentId++,
    title,
    message,
    createdBy: req.user?.role || "admin",
    createdAt: new Date(),
  };

  announcements.push(newAnnouncement);

  return successResponse(res, "Announcement created successfully", newAnnouncement, 201);
};

// GET ALL
export const getAllAnnouncements = (req, res) => {
  return successResponse(res, "Announcements fetched successfully", announcements);
};

// GET BY ID
export const getAnnouncementById = (req, res) => {
  const { id } = req.params;

  const announcement = announcements.find((a) => a.id == id);

  if (!announcement) {
    return errorResponse(res, "Announcement not found", 404);
  }

  return successResponse(res, "Announcement found", announcement);
};

// UPDATE
export const updateAnnouncement = (req, res) => {
  const { id } = req.params;

  const index = announcements.findIndex((a) => a.id == id);

  if (index === -1) {
    return errorResponse(res, "Announcement not found", 404);
  }

  const { title, message } = req.body;

  if (!title && !message) {
    return errorResponse(res, "Nothing to update", 400);
  }

  announcements[index] = {
    ...announcements[index],
    ...req.body,
  };

  return successResponse(res, "Announcement updated successfully", announcements[index]);
};

// DELETE
export const deleteAnnouncement = (req, res) => {
  const { id } = req.params;

  const index = announcements.findIndex((a) => a.id == id);

  if (index === -1) {
    return errorResponse(res, "Announcement not found", 404);
  }

  const deleted = announcements.splice(index, 1);

  return successResponse(res, "Announcement deleted successfully", deleted[0]);
};