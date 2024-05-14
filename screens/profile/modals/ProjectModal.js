// React Elements
import { View, StyleSheet, ScrollView, Modal, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Organisms
import LargeCardComponent from '../../../components/organisms/LargeCardComponent';

// Modals
import OverlayModal from './OverlayModal.js';
import GradientModal from './GradientModal.js';

// Styles
import * as Spacing from '../../../styles/spacing.js';

const ProjectModal = ({ visible, onClose, data }) => {

    console.log(data);

    return (
        <OverlayModal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={onClose}
            >
                {visible && <GradientModal />}
                <View style={styles.wrapper}>
                    <ScrollView
                        contentContainerStyle={styles.scroll}
                        showsVerticalScrollIndicator={false}
                    >
                        {/* for each project */}
                        <LargeCardComponent
                            data={{
                                id: 'data.id',
                                name: 'data.project.name',
                                finalmark: 'data.final_mark',
                                status: 'data["validated?"]',
                                occurrence: 'data.occurrence',
                                cursus: 'data.cursus_ids',
                                date: 'data.marked_at ? data.marked_at : data.created_at',
                                user_cursus: 'cursus.cursus.id'
                            }} />
                    </ScrollView>
                </View>
                <LinearGradient
                    colors={['transparent', 'rgba(20,20,20,1)']}
                    start={{ x: 0.5, y: 0.5 }}
                    style={styles.gradient}
                />
                <View style={styles.bottom}>
                    <Button title="Close" onPress={onClose} />
                </View>
            </Modal>
        </OverlayModal>
    )
}

const styles = StyleSheet.create({
    scroll: {
        paddingBottom: 200,
        paddingTop: 200
    },
    wrapper: {
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20
    },
    bottom: {
        position: 'absolute',
        bottom: 60,
        left: Spacing.SCREEN_WIDTH / 2,
        transform: [{ translateX: -30 }],
        elevation: 2,
        zIndex: 2
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 300,
        zIndex: 1,
        elevation: 1,
        pointerEvents: 'none',
    }
});

export default ProjectModal;