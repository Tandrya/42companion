// React Elements
import React from 'react';
import { Platform, View } from 'react-native';

// Tabs
import ProfileTabs from './tabs/ProfileTabs.js';

// Components
import BackgroundComponent from '../../components/atoms/BackgroundComponent.js';
import AvatarComponent from '../../components/atoms/AvatarComponent.js';

// Contexts
import { useUser } from '../../contexts/UserContext.js';

const ProfileScreen = ({ navigation }) => {
  const { user, setUser } = useUser();

  const safeMargin = Platform.OS === 'ios' ? 100 : 60;

  return (
    <BackgroundComponent>
      <View style={{ marginTop: safeMargin }}>
        <AvatarComponent source={{ uri: user.image.versions.large }} login={user.login} />
      </View>
      <ProfileTabs />
    </BackgroundComponent>
  );
}

export default ProfileScreen;