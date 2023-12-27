import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Import your local screens
import HomeStack from '../../Navigator/HomeStack';
import StudyMaterial from '../StudyMaterial';

const Tab = createMaterialTopTabNavigator();

const TabScreen = () => {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="StudyMaterial" component={StudyMaterial} />
      </Tab.Navigator>
    </View>
  );
};

export default TabScreen;
