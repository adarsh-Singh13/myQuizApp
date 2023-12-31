import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// Import your local screens
import HomeScreen from '../../Screens/HomeScreen';
import StudyMaterial from '../../Screens/StudyMaterial';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator  ()  {
  const insets = useSafeAreaInsets();
  
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: 'powderblue' },
          tabBarIndicatorStyle: { backgroundColor: 'red' },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="StudyMaterial" component={StudyMaterial} />
      </Tab.Navigator>
  );
};

