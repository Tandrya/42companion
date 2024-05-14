import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const GradientModal = () => {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
            delay: 800
        }).start();
    }, [opacity]);

    return (
        <AnimatedLinearGradient
            colors={['rgba(10,10,10,1)', 'transparent']}
            start={{ x: 0.5, y: 0.1 }}
            end={{ x: 0.5, y: 0.5 }}
            style={[styles.gradient, { opacity: opacity }]}
        />
    );
};

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
        pointerEvents: 'none',
        zIndex: 1,
        elevation:1
    }
});

export default GradientModal;