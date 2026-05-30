import { dummyPayments } from "../data/dummyPayments";

export const getPayments = async () => {
  return dummyPayments;
};

export const getPaymentById = async (id) => {
  return dummyPayments.find((payment) => payment.id === id);
};