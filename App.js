// React Elements
import { Image, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './screens/home/HomeScreen.js';
import ProfileScreen from './screens/profile/ProfileScreen.js';

// Components
import BackgroundComponent from './components/atoms/BackgroundComponent.js';

// Styles
import { LIGHT_COLOR, PRIMARY_COLOR, ANTHRACITE_COLOR } from './styles/layoutStyles.js';

const Stack = createNativeStackNavigator();

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: ANTHRACITE_COLOR,
    PRIMARY_COLOR: PRIMARY_COLOR,
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
            headerTintColor: LIGHT_COLOR,
            headerTitleStyle: {
              alignSelf: 'center',
            },
            headerTransparent: true,
            headerTitle: () => (
              <Image
                style={{ width: 45, height: 30, resizeMode: 'contain', marginTop: 10}}
                source={require('./assets/images/42companionLogo.png')}
              />
            ),
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              cardStyle: { backgroundColor: 'transparent' },
              presentation: 'transparentModal',
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerTitleAlign: 'center',
              // headerTitle: () => (
              //   <Image
              //     style={{ width: 45, height: 30, resizeMode: 'contain', marginTop: 10}}
              //     source={require('./assets/images/42companionLogo.png')}
              //   />
              // ),
            }}
          />
        </Stack.Navigator>
        <StatusBar style="light" barStyle="light-content" />
      </NavigationContainer>
    </BackgroundComponent>
  );
}