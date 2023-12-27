import React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamsList } from "../AppNavigator/AppNavigator";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from "../../Screens/HomeScreen";
import StudyMaterial from "../../Screens/StudyMaterial";
import { Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function HomeStack () {
    return (
    <SafeAreaProvider>
        <View style={{marginTop: 20}}>
            <Text>MAINSCREEN</Text>
        </View>
        <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
            tabBarLabelStyle: { 
                fontSize: 13, 
                fontWeight: '600', 
                letterSpacing: 1,
                fontFamily: 'Rubik-SemiBold', 
            },
            tabBarAndroidRipple: { borderless: false },
            tabBarStyle: { backgroundColor: "#F3F3F3" , elevation: 2},
            tabBarActiveTintColor: '#F10B0B',
            tabBarInactiveTintColor: '#CBCACA',
            tabBarGap: 6,

        }}
        >
        <Tab.Screen name="Feed" component={HomeScreen} />
        <Tab.Screen name="StudyMaterial" component={StudyMaterial} />
      </Tab.Navigator>
    </SafeAreaProvider>
    )
};