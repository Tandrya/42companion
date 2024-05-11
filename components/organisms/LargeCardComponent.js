// React Elements
import { View, StyleSheet, ImageBackground } from 'react-native';

// Molecules
import CardTitleComponent from '../molecules/CardTitleComponent.js';
import CardInfoComponent from '../molecules/CardInfoComponent.js';
import CardTagComponent from '../molecules/CardTagComponent.js';

// Styles
import * as Spacing from '../../styles/spacing.js';
import * as Colors from '../../styles/colors.js';

const LargeCardComponent = ({ data }) => {
    if (data.name == 'Infos') {
        return (
            <View style={[style.cardWrapper]}>
                <ImageBackground
                    source={require('../../assets/images/largeCardBackground.png')}
                    style={{ width: '100%', height: 190 }}
                >
                    <View style={style.cardInner}>
                        <CardTitleComponent success={true} title={'Informations'} />
                        <View style={style.cardContentRow}>
                            <View style={style.cardContentColumn}>
                                <CardInfoComponent title={'Campus'} value={'42 Le Havre'} />
                                <CardInfoComponent title={'Grade'} value={'Learner'} />
                            </View>
                            <View style={style.cardContentColumn}>
                                <CardInfoComponent title={'Wallets'} value={'1500'} />
                                <CardInfoComponent title={'Eval. Points'} value={'4'} />
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    } else {
        return (
            <View style={[style.cardWrapper, {marginBottom: 20}]}>
                <ImageBackground
                    source={require('../../assets/images/largeCardBackground.png')}
                    style={{ width: '100%', height: 190 }}
                >
                    <View style={style.cardInner}>
                        <CardTitleComponent success={true} title={'libft'} />
                        <View style={style.cardContentColumn}>
                            <View style={[style.cardContentRow]}>
                                <CardInfoComponent title={'Cursus'} value={'Common Core'} />
                                <CardInfoComponent title={'Date'} value={'2024 - 05'} />
                            </View>
                            <View style={[style.cardContentRow, {width: '100%'}]}>
                                <CardTagComponent color={Colors.DARK_COLOR} string={'100/100'} />
                                <CardTagComponent color={Colors.PRIMARY_COLOR} string={'Success'} />
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const style = StyleSheet.create({
    cardWrapper: {
        borderRadius: 20,
        overflow: 'hidden',
    },
    cardInner: {
        padding: Spacing.LARGE_SPACING,
    },
    cardContentRow: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardShadow: {
        shadowColor: "#00000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,

        elevation: 3,
    },
});

export default LargeCardComponent;