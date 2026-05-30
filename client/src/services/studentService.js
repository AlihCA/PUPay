import { dummyStudents } from "../data/dummyStudents";

export const getStudents = async () => {
  return dummyStudents;
};

export const getStudentById = async (id) => {
  return dummyStudents.find((student) => student.id === id);
};