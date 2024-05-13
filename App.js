// React Elements
import { Image, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './screens/home/HomeScreen.js';
import ProfileScreen from './screens/profile/ProfileScreen.js';

// Components
import BackgroundComponent from './components/atoms/BackgroundComponent.js';

// Styles
import * as Colors from './styles/colors.js';

// Contexts
import { UserProvider } from './contexts/UserContext.js';

const Stack = createNativeStackNavigator();

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: Colors.ANTHRACITE_COLOR,
    PRIMARY_COLOR: Colors.PRIMARY_COLOR,
  },
};

export default function App() {
  return (
    <UserProvider>
      <BackgroundComponent>
        <NavigationContainer theme={customTheme}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTintColor: Colors.LIGHT_COLOR,
              headerTitleStyle: {
                alignSelf: 'center',
              },
              headerTransparent: true,
              headerTitle: () => (
                <Image
                  style={{ width: 45, height: 30, resizeMode: 'contain', marginTop: 10 }}
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
              }}
            />
          </Stack.Navigator>
          <StatusBar style="light" barStyle="light-content" />
        </NavigationContainer>
      </BackgroundComponent>
    </UserProvider>
  );
}