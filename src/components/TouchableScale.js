import React, { useRef } from 'react';
import { TouchableOpacity, Animated } from 'react-native';

const TouchableScale = ({ children, onPress }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const pressIn = () => {
    const scaleTo = 0.7;
    Animated.timing(scaleAnim, {
      toValue: scaleTo,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const pressOut = (event) => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}>
      <Animated.View style={[{ transform: [{ scale: scaleAnim }] }]}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default TouchableScale;
