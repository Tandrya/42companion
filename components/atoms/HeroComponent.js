import { View, Image, StyleSheet } from 'react-native';

// Assets
import TitleSVG from '../../assets/svg/mainTitle.svg';

const HeroComponent = () => {
    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <TitleSVG width={'80%'} />
            </View>
            <Image
                source={require('../../assets/images/heroImage.png')}
                style={styles.heroImage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    heroImage: {
        width: '85%',
        alignSelf: 'center',
        height: 250,
        resizeMode: 'contain'
    },
})

export default HeroComponent;