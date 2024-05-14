// React Elements
import { View, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Organisms
import LargeCardComponent from '../../../components/organisms/LargeCardComponent';

// Modals
import OverlayModal from './OverlayModal.js';
import GradientModal from './GradientModal.js';

// Styles
import * as Spacing from '../../../styles/spacing.js';
import * as Colors from '../../../styles/colors.js';

// Assets
import CloseSVG from '../../../assets/svg/closeIcon.svg';

const ProjectModal = ({ visible, onClose, data }) => {

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
                        {data && data.map(project => (
                            <LargeCardComponent
                                key={project.id}
                                data={{
                                    id: project.id,
                                    name: project.name,
                                    finalmark: project.final_mark,
                                    status: project["validated?"],
                                    occurrence: project.occurrence,
                                    cursus: project.cursus_ids,
                                    date: project.marked_at ? project.marked_at : project.created_at,
                                    user_cursus: project.cursus_ids
                                }}
                            />
                        )).reverse()}
                    </ScrollView>
                </View>
                <LinearGradient
                    colors={['transparent', 'rgba(10,10,10,1)']}
                    start={{ x: 0.5, y: 0.5 }}
                    style={styles.gradient}
                />
                <TouchableOpacity
                    title="Close"
                    onPress={onClose}
                    style={styles.bottom}
                >
                    <View style={styles.button}>
                        <CloseSVG width={15} height={15} />
                    </View>
                </TouchableOpacity>
                {/* <View style={styles.bottom}>
                    <Button title="Close" onPress={onClose} />
                </View> */}
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
    },
    button: {
        backgroundColor: Colors.PRIMARY_COLOR,
        height: 60,
        aspectRatio: 1,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProjectModal;