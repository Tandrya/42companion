// React Elements
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// Organisms
import LargeCardComponent from '../../../components/organisms/LargeCardComponent.js';

// Contexts
import { useUser } from '../../../contexts/UserContext.js';

const ProjectsScreen = () => {
    const { user, setUser } = useUser();
    const { cursus, setCursus } = useUser();

    const handleProjectPress = (id, occurrence) => {
        if (occurrence && occurrence > 0) {
            alert('Visit project');
        }
    }

    return (
        <View style={styles.projectTabWrapper}>
            <ScrollView
                style={styles.projectTabScrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {user.projects_users.map(project => (
                    <TouchableOpacity activeOpacity={1} key={project.id} onPress={() => handleProjectPress(project.id, project.occurrence)}>
                        <LargeCardComponent
                            key={project.id}
                            data={{
                                id: project.id,
                                name: project.project.name,
                                finalmark: project.final_mark,
                                status: project["validated?"],
                                occurrence: project.occurrence,
                                cursus: project.cursus_ids,
                                date: project.marked_at ? project.marked_at : project.created_at,
                                user_cursus: cursus.cursus.id
                            }} />
                    </TouchableOpacity>
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