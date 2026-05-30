import { dummyCollections } from "../data/dummyCollections";

export const getCollections = async () => {
  return dummyCollections;
};

export const createCollection = async (data) => {
  return {
    id: Date.now(),
    ...data,
    collected: 0,
  };
};

export const updateCollection = async (id, data) => {
  return {
    id,
    ...data,
  };
};

export const deleteCollection = async (id) => {
  return id;
};