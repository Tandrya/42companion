// Environment Variables
import { API_GET_USER, API_GET_USER_INFOS } from "@env";

export const getUserInfos = async (accessToken, login) => {

  try {
    const response = await fetch(`${API_GET_USER}${login}`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
    const data = await response.json();
    const userInfos = data[0];

    if (userInfos && userInfos.id) {
      const userAllInfos = await getUserAllInfos(accessToken, userInfos.id);
      return userAllInfos;
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};

export const getUserAllInfos = async (accessToken, userID) => {

  try {
    const response = await fetch(`${API_GET_USER_INFOS}${userID}`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
    const data = await response.json();

    if (data && data.login) {
      return data;
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};

// For all project occurrences
// GET /v2/projects_users/:id