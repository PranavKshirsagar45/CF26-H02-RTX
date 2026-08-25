import axios from "axios";

const API_URL = "http://localhost:8080/api/appointments";

export const getMyAppointments = async () => {
  const response = await axios.get(`${API_URL}/my`);
  return response.data;
};

export const getAppointmentById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createAppointment = async (appointmentData) => {
  const response = await axios.post(API_URL, appointmentData);
  return response.data;
};

export const updateAppointment = async (id, appointmentData) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    appointmentData
  );

  return response.data;
};

export const cancelAppointment = async (id) => {
  const response = await axios.patch(
    `${API_URL}/${id}/cancel`
  );

  return response.data;
};