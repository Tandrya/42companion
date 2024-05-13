// React Elements
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

// Atoms
import TextComponent from '../atoms/TextComponent.js';

const AvatarComponent = ({ source, login }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View
                style={styles.container}
            >
                <Image
                    source={source}
                    style={styles.image}
                />
            </View>
            <TextComponent string={login} style={{ fontSize: 16 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 125,
        height: 125,
        overflow: 'hidden',
        borderRadius: 70,
        borderColor: '#D2FF1F',
        borderWidth: 4,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    image: {
        aspectRatio: 1, 
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 70
    }
});

export default AvatarComponent;