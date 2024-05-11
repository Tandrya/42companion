// React Elements
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAccessToken, retrieveAccessToken } from './AuthService.js';

// Environment Variables
import { API_GET_USER } from "@env";

export const getUserInfos = async (accessToken, login) => {
  try {
    console.log(login)
    const response = await fetch(`${API_GET_USER}${login}`, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
    const data = await response.json();
    const user = data[0];
    console.log(data)
    if (user && user.login) {
      return user;
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};

// export const getUserProjects = (accessToken, userId) => {
//   return fetch(`https://api.intra.42.fr/v2/users/${userId}/projects_users`, {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${accessToken}`,
//       'Content-Type': 'application/json',
//     },
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Invalid response from 42 API');
//       }
//       return response.json();
//     })
//     .then(data => data)
//     .catch(error => {
//       console.error('Error:', error);
//       return null;
//     });
// }

// export const getUserCursus = (accessToken, userId) => {
//   return fetch(`https://api.intra.42.fr/v2/users/${userId}/cursus_users`, {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${accessToken}`,
//       'Content-Type': 'application/json',
//     },
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Invalid response from 42 API');
//       }
//       return response.json();
//     })
//     .then(data => data)
//     .catch(error => {
//       console.error('Error:', error);
//       return null;
//     });
// }