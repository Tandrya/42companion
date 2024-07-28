// Environment Variables
import { API_GET_USER, API_GET_USER_INFOS, API_GET_PROJECT } from "@env";

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
    console.error('Error fetching all user infos:', error);
    return null;
  }
};

export const getProjectOccurrences = async (accessToken, projectID) => {

  try {
    const response = await fetch(`${API_GET_PROJECT}${projectID}`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
    const data = await response.json();

    if (data) {
      return data;
    }
  } catch (error) {
    console.error('Error fetching project occurrences:', error);
    return null;
  }
};