// React & Expo Elements
import { StyleSheet } from 'react-native';

// Color Styles
import { lightColor } from './layoutStyles.js';

// Text Styles
export const textStyles = StyleSheet.create({
  body: {
    color: lightColor,
    fontSize: 16,
  },
  input: {
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
  }
});