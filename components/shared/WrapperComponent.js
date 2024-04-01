// React Elements
import { ScrollView, View } from 'react-native';

// Styles
import { layoutStyles } from '../../styles/layoutStyles.js'

const WrapperComponent = ({ children }) => (
    <ScrollView showsVerticalScrollIndicator={false} >
        <View style={layoutStyles.wrapper}>
            {children}
        </View>
    </ScrollView>
);

export default WrapperComponent;