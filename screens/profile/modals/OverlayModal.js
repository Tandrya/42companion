// React Elements
import { View, Modal, ScrollView, StyleSheet } from 'react-native';

const OverlayModal = ({ children, visible, onClose }) => {

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={onClose}
            >
                <View style={styles.wrapper}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {children}
                    </ScrollView>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        backgroundColor: 'rgba(10, 10, 10, 0.9)'
    }
});

export default OverlayModal;