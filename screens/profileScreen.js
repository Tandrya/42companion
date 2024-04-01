import React from 'react';
import { Text, Button } from 'react-native';

// Components
import BackgroundComponent from '../components/shared/BackgroundComponent.js';
import WrapperComponent from '../components/shared/WrapperComponent.js';

const ProfileScreen = ({ navigation }) => {
  return (
    <BackgroundComponent>
      <WrapperComponent>
          <Text>User Profile</Text>
          <Button
            title="Back"
            onPress={() => navigation.navigate('Index')}
          />
      </WrapperComponent>
    </BackgroundComponent>
  );
}

export default ProfileScreen;