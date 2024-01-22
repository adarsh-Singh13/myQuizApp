import { View, Text, Pressable } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../Navigator/AppNavigator/AppNavigator';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StudyListItems from './StudyListItems/studyListItems';
import React from 'react';


interface StudyMaterialProp{
  navigation : StackNavigationProp<RootStackParamsList, "HomeStack">
}

export default function StudyMaterial (navigation: StudyMaterialProp) {
  return (
    <View>
      <StudyListItems/>
    </View>
  )
}
