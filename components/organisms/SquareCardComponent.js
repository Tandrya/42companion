// React Elements
import { View, StyleSheet, Text, ImageBackground } from 'react-native';

// Atoms
import TextComponent from '../atoms/TextComponent.js';

// Styles
import * as Spacing from '../../styles/spacing.js';
import * as Colors from '../../styles/colors.js';

const SquareCardComponent = ({ style, title, value }) => {

    return (
        <View style={[styles.squareCardWrapper, styles.squareCardShadow, style]}>
            <ImageBackground
                source={require('../../assets/images/squareCardBackground.png')}
                resizeMode='contain'
                style={styles.backgroundImage}
            >
                <View style={{ padding: 15, height: '100%', width: '100%' }}>
                    <TextComponent string={title} />
                    <View style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', height: '75%' }}>
                        <TextComponent string={value} style={{ fontSize: 40, color: Colors.LIGHT_COLOR }} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    squareCardWrapper: {
        backgroundColor: Colors.DARK_COLOR,
        width: Spacing.SCREEN_WIDTH / 2 - 30,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        aspectRatio: 1,
        borderRadius: 20,
        marginTop: 20,
        overflow: 'hidden',
    },
    squareCardShadow: {
        shadowColor: "#00000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
    },
});

export default SquareCardComponent;