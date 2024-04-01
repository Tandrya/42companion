// React Elements
import AsyncStorage from '@react-native-async-storage/async-storage';

// Environment Variables
import { API_GET_USER } from "@env";

export const getUserInfos = (accessToken, login) => {
  return AsyncStorage.getItem('userData')
    .then(userDataString => {
      if (userDataString) {
        return JSON.parse(userDataString);
      }

      return fetch(`${API_GET_USER}${login}`, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      })
        .then(response => response.json())
        .then(data => {
          const user = data[0];
          if (user && user.login) {
            AsyncStorage.setItem('userData', JSON.stringify(user))
              .then(() => console.log('Updated user infos in AsyncStorage'));
            return user;
          }
          throw new Error('Failed to obtain user infos');
        });
    })
    .catch(error => {
      console.error('Error fetching user:', error);
      return null;
    });
};

export const getUserProjects = (accessToken, userId) => {
  return fetch(`https://api.intra.42.fr/v2/users/${userId}/projects_users`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Invalid response from 42 API');
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      console.error('Error:', error);
      return null;
    });
}

export const getUserCursus = (accessToken, userId) => {
  return fetch(`https://api.intra.42.fr/v2/users/${userId}/cursus_users`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Invalid response from 42 API');
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      console.error('Error:', error);
      return null;
    });
}

/* Tests */
export const handleSearch = () => {
  retrieveAccessToken().then((accessToken) => {
    getUser(accessToken, 'mlaval').then((data) => {
      console.log('userID', data);

      getUserCursus(accessToken, data.id).then((cursusData) => {
        const mainCursus = cursusData.find(
          (cursus) => cursus.cursus.kind === 'main'
        );
        console.log('cursusData', mainCursus);
        return getUserProjects(accessToken, data.id);
      });
    });
  });
};