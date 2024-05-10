// React Elements
import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';

// Components
import BackgroundComponent from '../components/atoms/BackgroundComponent.js';
import WrapperComponent from '../components/atoms/WrapperComponent.js';
import TitleComponent from '../components/atoms/TitleComponent.js';
import TextComponent from '../components/atoms/TextComponent.js';

// API Services
import { getUserInfos } from '../api/ApiService.js';
import { retrieveAccessToken } from '../api/AuthService.js';

// Styles
import { layoutStyles } from '../styles/layoutStyles.js';
import { textStyles } from '../styles/textStyles.js';

const HomeScreen = ({ navigation }) => {

  const [searchInput, setSearchInput] = useState('');

  const handleProfileSearch = async () => {
    const accessToken = await retrieveAccessToken();
    const userInfos = await getUserInfos(accessToken, searchInput.toLocaleLowerCase());
    
    if (userInfos) {
      navigation.navigate('Profile', { userInfos });
    } else {
      console.error('User not found.');
    }
  };

  return (
    <BackgroundComponent>
      <WrapperComponent>
        <Image
          source={require('../assets/images/heroGraphImage.png')}
          style={layoutStyles.heroGraphImage}
        />
        <View style={{ alignContent: 'center', justifyContent: 'center' }}>
          <TitleComponent />
          <Image
            source={require('../assets/images/heroImage.png')}
            style={layoutStyles.heroImage}
          />
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TextComponent>
              <Text style={textStyles.body}>Search for a 42 login.</Text>
            </TextComponent>
            <TextInput
              cursorColor={'white'}
              maxLength={12}
              style={textStyles.input}
              onChangeText={setSearchInput}
              value={searchInput}
            />
            <Button
              title="Search"
              onPress={handleProfileSearch}
            />
          </View>
        </View>
      </WrapperComponent>
    </BackgroundComponent>
  );
}

export default HomeScreen;