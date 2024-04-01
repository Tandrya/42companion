// React Elements
import React from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';

// Components
import BackgroundComponent from '../components/shared/BackgroundComponent.js';
import WrapperComponent from '../components/shared/WrapperComponent.js';
import TitleComponent from '../components/shared/TitleComponent.js';
import RalewayText from '../components/text/RalewayText.js';

// Styles
import { layoutStyles } from '../styles/layoutStyles.js';

const HomeScreen = ({ navigation }) => {

  const handleProfile = () => {
    /* Tests */
    navigation.navigate('Profile');
  };

  return (
    <BackgroundComponent>
      <WrapperComponent>
        <Image
          source={require('../assets/images/heroGraphImage.png')}
          style={layoutStyles.heroGraphImage}
        />
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
          <TitleComponent />
          <Image
            source={require('../assets/images/heroImage.png')}
            style={layoutStyles.heroImage}
          />
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <RalewayText>
              <Text style={{ fontSize: 16, color: 'white' }}>Search for a 42 login.</Text>
            </RalewayText>
            <TextInput
              cursorColor={'white'}
              maxLength={12}
              style={{
                paddingBottom: 10,
                width: 300,
                marginBottom: 60,
                marginTop: 30,
                height: 40,
                color: 'white',
                fontFamily: 'Raleway_500Medium',
                borderTopColor: 'transparent',
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: 'white',
                borderWidth: 1,
              }}
            />
            <Button
              title="Search"
              onPress={handleProfile}
            />
          </View>
        </View>
      </WrapperComponent>
    </BackgroundComponent>
  );
}

export default HomeScreen;