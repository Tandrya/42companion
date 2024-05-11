import { Dimensions } from 'react-native';

// Dimensions
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width > 500 ? 500 : Dimensions.get('window').width;

// Spacing
export const SMALL_SPACING = 5;
export const MEDIUM_SPACING = 10;
export const LARGE_SPACING = 20;
export const XLARGE_SPACING = 40;