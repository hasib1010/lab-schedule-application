import axios from "axios";
import baseUrl from "../api/apiConfig";

const upsertUser = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl.users}`, userData);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error creating the user:", error);
    throw error;
  }
};
const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${baseUrl.login}`, {
      username,
      password,
    });
    if (response.data?.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

const UserManagement = {
  upsertUser,
  loginUser,
};

// Export the object
export default UserManagement;
