/* eslint-disable prettier/prettier */
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

/**
 * ? Local Imports
 */
import HomeScreen from '../Screens/HomeScreen';
import BioMetrics from '../Screens/BioMetrics';
import Onboarding from '../Screens/Onboarding';
import DailyQuizComponent from '../Screens/DailyQuizScreen';

export type RootStackParamsList = {
  Home: undefined;
  BioMetrics: undefined;
  Onboard: undefined;
  DailyQuiz: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'DailyQuiz'} component={DailyQuizComponent} />
        <Stack.Screen name={'Onboard'} component={Onboarding} />
        <Stack.Screen name={'BioMetrics'} component={BioMetrics} />
        <Stack.Screen name={'Home'} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
