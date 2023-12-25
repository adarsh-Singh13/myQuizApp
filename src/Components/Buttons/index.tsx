import React from 'react';
import { Text, View, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  text: string;
  textStyle?: TextStyle;
  labelStyle?: ViewStyle;
}

export default function Buttons ({ onPress, text, textStyle, labelStyle }: ButtonProps)  {
  return (
    <TouchableOpacity
        onPress={onPress}
        style={labelStyle}
    >
      <Text style={textStyle} onPress={onPress}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
