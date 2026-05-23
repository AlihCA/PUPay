import { successResponse, errorResponse } from "../utils/responseHelper.js";

let announcements = [];
let currentId = 1;

// CREATE announcement
export const createAnnouncement = (req, res) => {
  try {
    const { title, message, createdBy } = req.body;

    if (!title || !message) {
      return errorResponse(
        res,
        "Title and message are required",
        400
      );
    }

    const newAnnouncement = {
      id: currentId++,
      title,
      message,
      createdBy: createdBy || "admin",
      createdAt: new Date(),
    };

    announcements.push(newAnnouncement);

    return successResponse(
      res,
      "Announcement created successfully",
      newAnnouncement,
      201
    );
  } catch (error) {
    return errorResponse(res, "Server error", 500);
  }
};

// GET all announcements
export const getAllAnnouncements = (req, res) => {
  return successResponse(
    res,
    "Announcements fetched successfully",
    announcements
  );
};

// GET single announcement
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

// UPDATE announcement
export const updateAnnouncement = (req, res) => {
  const { id } = req.params;

  const index = announcements.findIndex((a) => a.id == id);

  if (index === -1) {
    return errorResponse(res, "Announcement not found", 404);
  }

  announcements[index] = {
    ...announcements[index],
    ...req.body,
  };

  return successResponse(
    res,
    "Announcement updated successfully",
    announcements[index]
  );
};

// DELETE announcement
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