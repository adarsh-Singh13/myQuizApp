import { View, Text, Pressable } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../Navigator/AppNavigator/AppNavigator';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


/**
 *  ? Local Imports
 */

import StudyMaterial from '../StudyMaterial';


interface HomeScreenProps{
  navigation : StackNavigationProp<RootStackParamsList, 'Home'>
}
const Tab = createMaterialTopTabNavigator();

export default function HomeScreen ({navigation}: HomeScreenProps) {
  return (
   <View>
    <Text>HoMESCREEN</Text>
   </View>
  )
}
