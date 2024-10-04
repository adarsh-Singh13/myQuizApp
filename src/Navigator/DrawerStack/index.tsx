import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DailyQuizScreen from "../../Screens/DailyQuizScreen";
import DrawerContent from "../../Screens/DailyQuizScreen/DrawerContent/DrawerContent";
import { useNavigation } from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Drawer = createDrawerNavigator();

export default function DrawerStack ({route, navigation}: any) {
    // console.log("PARAMETERS++", route.params);
    const { quizId, quizData } = route.params;
    return (
        <SafeAreaProvider>
            <Drawer.Navigator screenOptions={{
                drawerStyle: {
                    marginTop: hp('0%'),
                    backgroundColor: 'transparent',
                },
                headerShown: false,
                drawerPosition: 'right',
            }}  drawerContent={(props) => <DrawerContent initialParams={{ quizId, quizData }} {...props}/>}>
            <Drawer.Screen name={'DailyQuiz'} component={DailyQuizScreen}   initialParams={{ quizId, quizData }}/>
            </Drawer.Navigator>
        </SafeAreaProvider>
    );
}