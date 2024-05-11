// React Elements
import { View, StyleSheet, ScrollView } from 'react-native';

// Organisms
import LargeCardComponent from '../../../components/organisms/LargeCardComponent.js';
import SquareCardComponent from '../../../components/organisms/SquareCardComponent.js';


const InfosScreen = () => {
    return (
        <View style={style.infoTabWrapper}>
            <ScrollView
                style={style.infoTabScrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <LargeCardComponent data={{ name: 'Infos' }} />
                <View style={style.infoTabRow}>
                    <SquareCardComponent title={'Level'} value={'5.4'} />
                    <SquareCardComponent title={'Projects'} value={'12'} />
                </View>
                <View style={style.infoTabRow}>
                    <SquareCardComponent title={'Pool Date'} value={'2016'} />
                    <SquareCardComponent title={'Pool Level'} value={'9'} />
                </View>
                <View style={style.infoTabRow}>
                    <SquareCardComponent title={'Success'} value={'4'} />
                    <SquareCardComponent title={'Fails'} value={'1'} />
                </View>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    infoTabScrollView: {
        paddingTop: 40,
        minHeight: '100%'
    },
    infoTabWrapper: {
        marginLeft: 20,
        marginRight: 20,
    },
    infoTabRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default InfosScreen;