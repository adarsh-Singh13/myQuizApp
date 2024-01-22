import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, Dimensions } from 'react-native';

export default function LoadingScreen  () {
    const translateY = useRef(new Animated.Value(-100)).current;
    const scale = useRef(new Animated.Value(0)).current;
    const colorAnimation = useRef(new Animated.Value(0)).current;
    const { height } = Dimensions.get('window');
  
    const runAnimations = () => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Trigger color animation after the initial animations are completed
        runColorAnimation();
      });
    };
  
    const runColorAnimation = () => {
      Animated.timing(colorAnimation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    };
  
    useEffect(() => {
      runAnimations();
    }, []);
  
    const backgroundColorInterpolation = colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(0, 0, 0, 0)', 'rgba(0, 255, 0, 1)'],
    });
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Animated.View
          style={{
            transform: [{ translateY }, { scale }],
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: backgroundColorInterpolation,
          }}
        />
      </View>
    );
};


