// React Elements
import { Image, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './screens/homeScreen.js';
import ProfileScreen from './screens/profileScreen.js';

// Styles
import { lightColor, primaryColor, anthraciteColor } from './styles/layoutStyles.js';
import BackgroundComponent from './components/shared/BackgroundComponent.js';

const Stack = createNativeStackNavigator();

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: anthraciteColor,
    primaryColor: primaryColor,
  },
};

export default function App() {
  return (
    <BackgroundComponent>
      <NavigationContainer theme={customTheme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: lightColor,
            headerTitleStyle: {
              alignSelf: 'center',
            },
            headerTransparent: true,
          }}
        >
          <Stack.Screen
            name="Index"
            component={HomeScreen}
            options={{
              cardStyle: { backgroundColor: 'transparent' },
              presentation: 'transparentModal',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerTitleAlign: 'center',
              headerTitle: () => (
                <Image
                  style={{ width: 45, height: 30, resizeMode: 'contain' }}
                  source={require('./assets/images/42companionLogo.png')}
                />
              ),
            }}
          />
        </Stack.Navigator>
        <StatusBar style="light" barStyle="light-content" />
      </NavigationContainer>
    </BackgroundComponent>
  );
}