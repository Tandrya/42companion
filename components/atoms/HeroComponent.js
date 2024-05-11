import { View, Image } from 'react-native';

// Assets
import TitleSVG from '../../assets/svg/mainTitle.svg';

// Styles
import { layoutStyles } from '../../styles/layoutStyles.js';

const HeroComponent = () => {
    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <TitleSVG width={'80%'} />
            </View>
            <Image
                source={require('../../assets/images/heroImage.png')}
                style={layoutStyles.heroImage}
            />
        </View>
    );
}

export default HeroComponent;