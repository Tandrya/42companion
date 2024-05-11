// React Elements
import {View, StyleSheet} from 'react-native';

// Atoms
import TextComponent from '../atoms/TextComponent.js';

// Assets
import CardIcon from '../../assets/svg/cardIcon.svg';

const CardTagComponent = ({color, string}) => {

    const fontColor = color == '#D2FF1F' ? '#000000' : '#FFFFFF';

    return (
        <View style={[styles.cardTagWrapper, {backgroundColor: color}]}>
            <TextComponent string={string} style={{fontSize: 14, color: fontColor}} />
        </View>
    );
}

const styles = StyleSheet.create({
    cardTagWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(25, 25, 25, 1)',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 25,
        marginTop: 30,
        marginBottom: 5,
    },
});

export default CardTagComponent;