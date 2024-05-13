// React Elements
import { View, StyleSheet, ScrollView } from 'react-native';

// Organisms
import LargeCardComponent from '../../../components/organisms/LargeCardComponent.js';

// Contexts
import { useUser } from '../../../contexts/UserContext.js';

const ProjectsScreen = () => {
    const { user, setUser } = useUser();

    return (
        <View style={styles.projectTabWrapper}>
            <ScrollView
                style={styles.projectTabScrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {user.projects_users.map(project => (
                    <LargeCardComponent key={project.id} data={{ name: project.project.name, finalmark: project.final_mark, status: project["validated?"] }} />
                ))}
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