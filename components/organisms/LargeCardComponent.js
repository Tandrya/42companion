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

    const user = data.user;

    return (
        <View style={[style.cardWrapper]}>
            <ImageBackground
                source={require('../../assets/images/largeCardBackground.png')}
                style={{ width: '100%', height: 190 }}
            >
                <View style={style.cardInner}>
                    <CardTitleComponent success={true} title={data.name} />

                    {data.name == 'Informations' ? (
                        <View style={style.cardContentRow}>
                            <View style={style.cardContentColumn}>
                                <CardInfoComponent title={'Name'} value={user.displayname} />
                                <CardInfoComponent title={'Wallet'} value={user.wallet + ' ₳'} />
                            </View>
                            <View style={style.cardContentColumn}>
                                <CardInfoComponent title={'Campus'} value={user.campus[0].name} />
                                <CardInfoComponent title={'Eval. Points'} value={user.correction_point} />
                            </View>
                        </View>
                    ) : (
                        <View style={style.cardContentColumn}>
                            <View style={[style.cardContentRow]}>
                                <CardInfoComponent title={'Cursus'} value={'Common Core'} />
                                <CardInfoComponent title={'Date'} value={'2024 - 05'} />
                            </View>
                            <View style={[style.cardContentRow, { width: '100%' }]}>
                                <CardTagComponent color={Colors.DARK_COLOR} string={data.finalmark == null ? 'In Progress' : data.finalmark + ' / 100' } />
                                {data.finalmark !== null ? (
                                    <CardTagComponent color={data.status ? Colors.PRIMARY_COLOR : Colors.SECONDARY_COLOR} string={data.status ? 'Success' : 'Failure'} />
                                ) : (
                                    null
                                )}
                            </View>
                        </View>
                    )}
                </View>
            </ImageBackground>
        </View>
    );
}

const style = StyleSheet.create({
    cardWrapper: {
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: Spacing.LARGE_SPACING,
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