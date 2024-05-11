// React Elements
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Tabs
import InfosScreen from './tabs/InfosTab.js';
import ProjectsScreen from './tabs/ProjectsTab.js';
import SkillsScreen from './tabs/SkillsTab.js';

// Components
import BackgroundComponent from '../../components/atoms/BackgroundComponent.js';
import AvatarComponent from '../../components/atoms/AvatarComponent.js';

// Styles
import * as Colors from '../../styles/colors.js';
import * as Spacing from '../../styles/spacing.js';

const Tab = createMaterialTopTabNavigator();
const TabNavigatorOptions = {
  tabBarLabelStyle: {
    textTransform: 'none',
    fontFamily : 'Raleway_500Medium',
  },
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: '#F8F8F8',
  tabBarStyle: {
    backgroundColor: Colors.ANTHRACITE_COLOR,
    borderRadius: 50,
    marginTop: 20,
    marginLeft: Spacing.LARGE_SPACING - 1,
    marginRight: Spacing.LARGE_SPACING - 1,
    borderColor: 'grey',
    borderWidth: 1,
    elevation: 0,
    marginBottom: -20,
  },
  tabBarIndicatorStyle: {
    backgroundColor: '#D2FF1F',
    height: null,
    top: '10%',
    bottom: '10%',
    width: 107,
    left: 4,
    right: 4,
    borderRadius: 100,
  },
};

function ProfileTabs() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'transparent' }}
      initialRouteName="Infos"
      screenOptions={TabNavigatorOptions}
    >
      <Tab.Screen
        name="Infos"
        component={InfosScreen}
        options={{ tabBarLabel: 'Infos' }}
      />
      <Tab.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{ tabBarLabel: 'Projects' }}
      />
      <Tab.Screen
        name="Skills"
        component={SkillsScreen}
        options={{ tabBarLabel: 'Skills' }}
      />
    </Tab.Navigator>
  );
}


const ProfileScreen = ({ route, navigation }) => {
  const { userInfos } = route.params;

  // console.log(userInfos);
  return (
    <BackgroundComponent>
      <SafeAreaView>
        <AvatarComponent source={{ uri: userInfos.image.versions.large }} login={userInfos.login} />
      </SafeAreaView>
      <ProfileTabs />
    </BackgroundComponent>
  );
}

export default ProfileScreen;