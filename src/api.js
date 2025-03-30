import axios from "axios";

const API_BASE_URL = "https://reqres.in/api";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    return response.data.token;
  } catch (error) {
    throw new Error("Invalid login credentials");
  }
};

export const fetchUsers = async (page) => {
  const response = await axios.get(`${API_BASE_URL}/users?page=${page}`);
  return response.data;
};

export const updateUser = async (id, userData) => {
  await axios.put(`${API_BASE_URL}/users/${id}`, userData);
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_BASE_URL}/users/${id}`);
};
