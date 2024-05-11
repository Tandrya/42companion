// React Elements
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Organisms
import LargeCardComponent from '../../../components/organisms/LargeCardComponent.js';

const ProjectsScreen = () => {
    return (
        <View style={styles.projectTabWrapper}>
            <ScrollView
                style={styles.projectTabScrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {/* For each project */}
                <LargeCardComponent data={{ name: 'Projects' }} />
                <LargeCardComponent data={{ name: 'Projects' }} />
                <LargeCardComponent data={{ name: 'Projects' }} />
                <LargeCardComponent data={{ name: 'Projects' }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    projectTabScrollView: {
        paddingTop: 40,
        minHeight: '100%'
    },
    projectTabWrapper: {
        marginLeft: 20,
        marginRight: 20,
    },
});

export default ProjectsScreen;