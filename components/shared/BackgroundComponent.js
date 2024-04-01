// React Elements
import { ImageBackground } from 'react-native';

const BackgroundComponent = ({ children }) => (
  <ImageBackground
    source={require('../../assets/images/backgroundMain.png')}
    style={{flex: 1, width: '100%', height: '100%'}}
  >
    {children}
  </ImageBackground>
);

export default BackgroundComponent;