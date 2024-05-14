// React Elements
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react'

// Organisms
import LargeCardComponent from '../../../components/organisms/LargeCardComponent.js';

// Functions
import { getProjectOccurrences } from '../../../api/ApiFunctions.js';
import { retrieveAccessToken } from '../../../api/AuthFunctions.js';

// Modals
import ProjectModal from '../modals/ProjectModal.js';

// Contexts
import { useUser } from '../../../contexts/UserContext.js';

const ProjectsScreen = () => {
    const { user, setUser } = useUser();
    const { cursus, setCursus } = useUser();

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectPress = async (id, occurrence) => {

        if (occurrence && occurrence > 0) {
            const token = await retrieveAccessToken();
            getProjectOccurrences(token, id).then((data) => {
                setSelectedProject(data.teams);
                setModalVisible(true);
            });
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
                    <TouchableOpacity
                        activeOpacity={1}
                        key={project.id}
                        onPress={() => handleProjectPress(project.id, project.occurrence)}
                    >
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
                            }}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <ProjectModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                data={selectedProject}
            />
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