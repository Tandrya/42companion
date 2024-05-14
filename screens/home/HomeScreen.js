// React Elements
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

// Components
import BackgroundComponent from '../../components/atoms/BackgroundComponent.js';
import WrapperComponent from '../../components/atoms/WrapperComponent.js';
import HeroComponent from '../../components/atoms/HeroComponent.js';
import TextComponent from '../../components/atoms/TextComponent.js';

// API Services
import { getUserInfos } from '../../api/ApiFunctions.js';
import { retrieveAccessToken } from '../../api/AuthFunctions.js';

// Styles
import * as Colors from '../../styles/colors.js';

// Contexts
import { useUser } from '../../contexts/UserContext.js';

// Assets
import InputSVG from '../../assets/svg/inputIcon.svg';
import SearchSVG from '../../assets/svg/searchIcon.svg';

const HomeScreen = ({ navigation }) => {

  const [searchInput, setSearchInput] = useState('');
  const { user, setUser } = useUser();
  const { cursus, setCursus } = useUser();

  const updateUserData = async (dataInfos) => {
    setUser(dataInfos);
    setCursus(dataInfos.cursus_users.find(cursus => cursus.cursus.kind === 'main'));
  }

  const handleProfileSearch = async () => {
    const accessToken = await retrieveAccessToken();
    const userInfos = await getUserInfos(accessToken, searchInput.toLocaleLowerCase());

    if (userInfos) {
      updateUserData(userInfos).then(() => {
        navigation.navigate('Profile');
      });
    } else {
      alert('User not found.');
      console.error('User not found.');
    }
  };

  return (
    <BackgroundComponent>
      <WrapperComponent>
        <Image
          source={require('../../assets/images/heroGraphImage.png')}
          style={styles.heroGraphImage}
        />
        <View style={{ alignContent: 'center', justifyContent: 'center' }}>
          <HeroComponent />
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TextComponent string={'Search for a 42 login :'} style={styles.textBody} />
            <View>
              <InputSVG width={20} height={20} style={{ position: 'absolute', top: 36, left: 0 }} />
              <TextInput
                cursorColor={'white'}
                maxLength={12}
                style={styles.textInput}
                onChangeText={setSearchInput}
                value={searchInput}
              />
            </View>
            <TouchableOpacity
              title="Search"
              onPress={handleProfileSearch}
            >
              <View style={styles.button}>
                <SearchSVG width={21} height={21} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </WrapperComponent>
    </BackgroundComponent>
  );
}

const styles = StyleSheet.create({
  heroGraphImage: {
    position: 'absolute',
    width: '115%',
    top: '25%',
    height: 250,
    resizeMode: 'cover'
  },
  textBody: {
    color: Colors.LIGHT_COLOR,
    fontSize: 16,
    marginBottom: 20
  },
  textInput: {
    paddingBottom: 10,
    paddingLeft: 40,
    width: 300,
    marginBottom: 70,
    marginTop: 30,
    height: 40,
    color: 'white',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    borderWidth: 1,
  },
  button: {
    backgroundColor: Colors.PRIMARY_COLOR,
    height: 70,
    aspectRatio: 1,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;