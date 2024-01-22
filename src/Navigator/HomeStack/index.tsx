import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamsList } from "../AppNavigator/AppNavigator";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import HomeScreen from "../../Screens/HomeScreen";
import StudyMaterial from "../../Screens/StudyMaterial";
import { Text } from "react-native";
import { SegmentedTabControl } from "../../Components/SegmentedTabControl/SegmentedTabControl";
import Colors from "../../Screens/Constants/Colour";

const Tab = createMaterialTopTabNavigator();

const options = ['Feed', 'Study Material']

export default function HomeStack () {

    const [selectedTab, setSelectedTab] = useState("Feed")

    const navigation = useNavigation();

    return (
    <SafeAreaProvider style={{
        flex: 1,
        backgroundColor: Colors.backGroundBase,
        // backgroundColor: 'red',
        }}>
        <View style={{
            backgroundColor: Colors.backGroundBase,
            alignItems: 'center',
            marginTop: 60
        }}>
        <View style={{
            marginBottom: 10,
            backgroundColor: 'red'
            }}/>
            <SegmentedTabControl 
                options={options} 
                selectedOption={selectedTab} 
                onOptionSelected={setSelectedTab}
            />
        </View>
            {selectedTab === 'Feed' ? <HomeScreen navigation={navigation}/> : <StudyMaterial navigation={navigation}/>}
    </SafeAreaProvider>
    )
};