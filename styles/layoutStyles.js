// React Elements
import { Dimensions, StyleSheet } from 'react-native';

// Dimensions
export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width > 500 ? 500 : Dimensions.get('window').width;

// Colors
export const PRIMARY_COLOR = '#D2FF1F';
export const SECONDARY_COLOR = '#FF825C';
export const ANTHRACITE_COLOR = '#1A1A1A';
export const LIGHT_COLOR = '#FFFFFF';
export const GREY_COLOR = '#272727';
export const LIGHTGREY_COLOR = '#A8A8A8';

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