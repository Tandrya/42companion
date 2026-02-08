## 42 Companion
A React Native application developed with Expo, designed to display information about students from the 42 Network, using the 42 API.

___

![alt text](https://isotope42.com/_ipx/_/https://tandrya.space/wp-content/uploads/2024/06/isotope-dev-mobile-1.webp)

___

### 42 Network 🔒
You must be a 42 Network student to access the app (as secret keys are provided by the 42 intranet).

### Installation Steps

1. **Install Dependencies**

Ensure you have Expo CLI installed. If not, you can install it by running:
```bash
npm install -g expo-cli
```
Next, install the project dependencies
```bash
npm install
```

2. **Create Environment File**

Create a `.env` file at the root of your project with the following content:

   ```env
   APP_ENV_UID=u-your-uid-here
   APP_ENV_SECRET=s-your-secret-here

   API_BASE_URL=https://api.intra.42.fr

   API_GET_USER_INFOS=${API_BASE_URL}/v2/users/
   API_GET_TOKEN=${API_BASE_URL}/oauth/token/
   API_GET_USER=${API_BASE_URL}/v2/users/?filter[login]=
   API_GET_PROJECT=${API_BASE_URL}/v2/projects_users/
   ```

   Replace `u-your-uid-here` and `s-your-secret-here` with your own keys provided by your 42 intranet.

4. **Run on Device or Emulator**
```sh
npm start # Starts the npm CLI
npm start --android # Opens your app in an Android emulator or connected device
npm start --ios # Opens your app in the iOS simulator (macOS only)
npm start --web # Opens your app in a web browser
```

   Refer to the [Expo documentation](https://docs.expo.dev/get-started/set-up-your-environment/?mode=expo-go) to configure your environment with an Android or iOS emulator, or on your own phone.

## Infos - Technology Stack
### Expo
Provides an easy way to build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.
### React Native
A framework for building native apps using React, allowing for the creation of rich and engaging user interfaces.

## Key Dependencies
#### @react-navigation/native + @react-navigation/native-stack
For navigation between different screens within the app.

-----

#### @react-native-async-storage/async-storage
Used for local storage of preferences or data.

-----

#### expo-status-bar
Provides a way to manage the status bar for the app.

-----

#### react-native-reanimated + react-native-gesture-handler
Enhance the app's animations and gestures, making the UI smooth and responsive.

-----

#### react-native-svg + react-native-svg-transformer
Enable the use of SVGs within the app, allowing for scalable and efficient graphics.
