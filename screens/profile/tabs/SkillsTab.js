// React Elements
import { View, StyleSheet, ScrollView } from 'react-native';

// Contexts
import { useUser } from '../../../contexts/UserContext.js';

// Vendor
import RadarChart from '../../../vendor/SpiderGraph.js';

// Styles
import * as Colors from '../../../styles/colors.js';

const SkillsScreen = () => {
    const { user, setUser } = useUser();
    const { cursus, setCursus } = useUser();

    const getSkills = cursus.skills.reduce((accumulator, currentValue) => {
        accumulator[currentValue.name] = currentValue.level / 15;
        return accumulator;
    }, {})

    return (
        <View style={styles.skillsTabWrapper}>
            <ScrollView
                style={styles.skillsTabScrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {user["staff?"] ? null : (
                    <RadarChart
                        graphSize={350}
                        scaleCount={16}
                        numberInterval={4}
                        data={[getSkills]}
                        options={{
                            graphShape: 1,
                            showAxis: true,
                            showIndicator: true,
                            colorList: [Colors.PRIMARY_COLOR],
                            dotList: [false],
                        }}
                    />
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    skillsTabScrollView: {
        paddingTop: 40,
        minHeight: '100%',
    },
    skillsTabWrapper: {
        marginLeft: 20,
        marginRight: 20,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
});

export default SkillsScreen;