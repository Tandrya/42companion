// React Elements
import { ScrollView, View, StyleSheet } from 'react-native';

// Styles
import * as Spacing from '../../styles/spacing.js';

const WrapperComponent = ({ children }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.wrapper}>
                {children}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        minHeight: Spacing.SCREEN_HEIGHT,
        width: Spacing.SCREEN_WIDTH,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop:30
    }
});

export default WrapperComponent;