// React Elements
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Organisms
import LargeCardComponent from '../../../components/organisms/LargeCardComponent.js';

const SkillsScreen = () => {
    return (
        <View style={styles.skillsTabWrapper}>
            <ScrollView
                style={styles.skillsTabScrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {/* For each project */}
                <LargeCardComponent data={{ name: 'skills' }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    skillsTabScrollView: {
        paddingTop: 40,
        minHeight: '100%'
    },
    skillsTabWrapper: {
        marginLeft: 20,
        marginRight: 20,
    },
});

export default SkillsScreen;