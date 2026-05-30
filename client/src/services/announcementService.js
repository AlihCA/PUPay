import { dummyAnnouncements } from "../data/dummyAnnouncements";

export const getAnnouncements = async () => {
  return dummyAnnouncements;
};

export const createAnnouncement = async (data) => {
  return {
    id: Date.now(),
    ...data,
    datePosted: new Date().toISOString().split("T")[0],
  };
};

export const updateAnnouncement = async (id, data) => {
  return {
    id,
    ...data,
  };
};

export const deleteAnnouncement = async (id) => {
  return id;
};