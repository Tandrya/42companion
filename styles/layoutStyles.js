// React Elements
import { Dimensions, StyleSheet } from 'react-native';

// Dimensions
export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width > 500 ? 500 : Dimensions.get('window').width;

// Colors
export const primaryColor = '#D2FF1F';
export const secondaryColor = '#FF825C';
export const anthraciteColor = '#1A1A1A';
export const lightColor = '#FFFFFF';
export const greyColor = '#272727';
export const lightGreyColor = '#A8A8A8';

// Layout Styles
export const layoutStyles = StyleSheet.create({
  wrapper: {
    minHeight: screenHeight,
    width: screenWidth,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  heroImage: {
    width: '85%',
    alignSelf: 'center',
    height: 250,
    resizeMode: 'contain'
  },
  heroGraphImage: {
    position: 'absolute',
    width: '115%',
    top: '25%',
    height: 250,
    resizeMode: 'cover'
  },
});