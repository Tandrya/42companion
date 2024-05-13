// React Elements
import { View, StyleSheet, ScrollView } from 'react-native';

// Organisms
import LargeCardComponent from '../../../components/organisms/LargeCardComponent.js';
import SquareCardComponent from '../../../components/organisms/SquareCardComponent.js';

// Styles
import * as Colors from '../../../styles/colors.js';

// Contexts
import { useUser } from '../../../contexts/UserContext.js';

const InfosScreen = () => {
    const { user, setUser } = useUser();
    const { cursus, setCursus } = useUser();

    const totalProjects = () => {
        let count = 0;
        user.projects_users.forEach(element => {
            if (element.cursus_ids == cursus.cursus.id) {
                count++;
            }
        });
        return count;
    }

    function daysFromNow(dateString) {
        const targetDate = new Date(dateString);
        const today = new Date();
        const difference = targetDate - today;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        return days;
    }

    const projectsCount = totalProjects();
    const blackholeDays = cursus.blackholed_at ? daysFromNow(cursus.blackholed_at) : '∞';

    return (
        <View style={style.infoTabWrapper}>
            <ScrollView
                style={style.infoTabScrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <LargeCardComponent data={{ name: 'Informations', user, cursus }} />
                <View style={style.infoTabRow}>
                    <SquareCardComponent title={'Level'} value={cursus.level} style={{backgroundColor : Colors.PRIMARY_COLOR}} />
                    <SquareCardComponent title={'Projects'} value={projectsCount} />
                </View>
                <View style={style.infoTabRow}>
                    <SquareCardComponent title={'Blackhole Days'} value={blackholeDays} />
                    <SquareCardComponent title={'Pool Year'} value={cursus.user.pool_year} />
                </View>
                <View style={style.infoTabRow}>
                    <SquareCardComponent title={'Achievements'} value={user.achievements.length} />
                    <SquareCardComponent title={'Expertises'} value={user.expertises_users.length} />
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