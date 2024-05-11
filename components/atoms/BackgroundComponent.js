// React Elements
import { ImageBackground } from 'react-native';

const BackgroundComponent = ({ children }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/backgroundMain.png')}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </ImageBackground>
  );
}

export default BackgroundComponent;