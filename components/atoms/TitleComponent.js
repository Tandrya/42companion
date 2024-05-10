// React Elements
import { View } from 'react-native';

// Assets
import TitleSVG from '../../assets/svg/mainTitle.svg';

// Styles
import { screenWidth } from '../../styles/layoutStyles.js';

const TitleComponent = () => (
  <View style={{alignItems:'center'}}>
    <TitleSVG width={'80%'} />
  </View>
);

export default TitleComponent;