// React Elements
import { View, StyleSheet } from 'react-native';

// Atoms
import TextComponent from '../atoms/TextComponent.js';

// Styles
import * as Colors from '../../styles/colors.js';
import * as Typography from '../../styles/typography.js';
import * as Spacing from '../../styles/spacing.js';

const CardInfosComponent = ({ title, value }) => {
    return (
        <View style={style.infoWrapper}>
            <TextComponent string={title} style={style.title} />
            <TextComponent string={value} />
        </View>
    );
}

const style = StyleSheet.create({
    title: {
        fontSize: Typography.SMALL_FONT_SIZE,
        lineHeight: Typography.LARGE_LINE_HEIGHT,
        color: Colors.LIGHTGREY_COLOR,
    },
    infoWrapper: {
        marginTop: Spacing.LARGE_SPACING
    }
});

export default CardInfosComponent;