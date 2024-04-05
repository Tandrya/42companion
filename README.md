## Context
42companion is a small React Native application developed with Expo, designed to display information about students from the 42 Network. This information is fetched using the 42 API, making it a handy tool for anyone within the 42 community looking to access student details on-the-go.

## Disclaimer
This project is currently under development. As such, features and functionalities are subject to change. The application aims to provide a robust and user-friendly interface for accessing student information but may have some areas that are being improved or refined.

## Technology Stack
Expo: Provides an easy way to build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.
React Native: A framework for building native apps using React, allowing for the creation of rich and engaging user interfaces.

## Key Dependencies
### @react-navigation/native + @react-navigation/native-stack
For navigation between different screens within the app.

### @react-native-async-storage/async-storage
Used for local storage of preferences or data.

### expo-status-bar
Provides a way to manage the status bar for the app.

### react-native-reanimated + react-native-gesture-handler
Enhance the app's animations and gestures, making the UI smooth and responsive.

### react-native-svg and react-native-svg-transformer
Enable the use of SVGs within the app, allowing for scalable and efficient graphics.


## Project Setup

### Prerequisites
Ensure you have Expo CLI installed. If not, you can install it by running:

```sh
npm install -g expo-cli
```

### Install dependencies

```sh
npm install
```

### Running the App

To start the app, you can use the following commands depending on the platform you want to test:

```sh
expo start # Starts the Expo CLI
expo start --android # Opens your app in an Android emulator or connected device
expo start --ios # Opens your app in the iOS simulator (macOS only)
expo start --web # Opens your app in a web browser
```
