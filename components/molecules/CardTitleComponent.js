// React Elements
import { View } from 'react-native';

// Atoms
import TextComponent from '../atoms/TextComponent.js';

// Assets
import CardIcon from '../../assets/svg/cardIcon.svg';

// Styles
import * as Colors from '../../styles/colors.js';

const CardTitleComponent = ({ success, title }) => {

    const color = success ? Colors.PRIMARY_COLOR : Colors.SECONDARY_COLOR;
    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <CardIcon style={{ color: color, marginRight: 10 }} />
            <TextComponent string={title} style={{ color: color }} />
        </View>
    );
}

export default CardTitleComponent;