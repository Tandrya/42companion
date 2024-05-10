// React Elements
import React from 'react';
import { SafeAreaView } from 'react-native';

// Components
import BackgroundComponent from '../components/atoms/BackgroundComponent.js';
import AvatarComponent from '../components/atoms/AvatarComponent.js';


const ProfileScreen = ({ route, navigation }) => {
  const { userInfos } = route.params;

  console.log(userInfos)
  return (
    <BackgroundComponent>
      {/* <WrapperComponent> */}
      <SafeAreaView>
        <AvatarComponent source={{ uri: userInfos.image.versions.large }} login={userInfos.login} />

      </SafeAreaView>
      {/* </WrapperComponent> */}
    </BackgroundComponent>
  );
}

export default ProfileScreen;