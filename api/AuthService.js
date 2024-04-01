// React Elements
import AsyncStorage from '@react-native-async-storage/async-storage';

// Environment Variables
import { APP_ENV_UID, APP_ENV_SECRET, API_GET_TOKEN } from "@env";

export const getAccessToken = async () => {
    try {
        const response = await fetch(API_GET_TOKEN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                grant_type: 'client_credentials',
                client_id: APP_ENV_UID,
                client_secret: APP_ENV_SECRET,
            }),
        });

        const data = await response.json();

        if (data.access_token) {
            await AsyncStorage.setItem('tokenData', JSON.stringify(data));
            return data.access_token;
        } else {
            console.error('Failed to obtain the access token');
            return null;
        }
    } catch (error) {
        console.error('Error fetching access token:', error);
        return null;
    }
};

export const retrieveAccessToken = async () => {
    const storedDataString = await AsyncStorage.getItem('tokenData');
    if (!storedDataString) {
        return await getAccessToken();
    }

    const tokenData = JSON.parse(storedDataString);
    const { access_token, created_at, expires_in } = tokenData;

    const currentTime = Date.now();
    const expirationTime = (created_at + expires_in) * 1000;

    if (currentTime > expirationTime) {
        return await getAccessToken();
    } else {
        return access_token;
    }
};