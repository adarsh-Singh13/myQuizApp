import React, {useState, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Pressable,
  Keyboard,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../Navigator/AppNavigator';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import {Directions} from 'react-native-gesture-handler';
import Animated, { 
    BounceIn, 
    BounceOut, 
    SlideInLeft,
    SlideInRight,
    SlideOutRight,
} from 'react-native-reanimated';

/**
 * ? Local Imports
 */

import createStyles from './Onboardingscreen.style';
import { ReanimatedKeyframe } from 'react-native-reanimated/lib/typescript/reanimated2/layoutReanimation/animationBuilder/Keyframe';

interface onboardingProps {
  navigation: StackNavigationProp<RootStackParamsList, 'Onboard'>;
}

const onboardingData = [
  {
    icon: 'people-carry',
    title: 'Upgarde Your Knowledge and get a new Level',
    description:
      'Dive into the world of coding with our interactive developer study app designed to empower and elevate your programming skills.',
  },
  {
    icon: 'american-sign-language-interpreting',
    title: `Welcome       #RNBuild`,
    description:
      'Stay motivated by monitoring your progress through personalized dashboards. Set goals, track completion rates, and witness your skills grow over time.',
  },
  {
    icon: 'book-reader',
    title: 'Learn All the Concepts here',
    description:
      'From foundational languages to cutting-edge technologies, our app covers a wide array of subjects to suit developers of all levels. ',
  },
];

export default function Onboarding({navigation}: onboardingProps) {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingData[screenIndex];

  const onContinuePress = () => {
    let endScreen = screenIndex === onboardingData.length - 1;
    if (endScreen) {
      navigation.navigate('Home');
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    let firstScreen = screenIndex === 0;
    if (firstScreen) {
        endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(screenIndex);
  };

  const onSkipPress = () => {
    navigation.navigate('Home');
    // setScreenIndex(0);
  };

    const swipes = Gesture.Simultaneous(Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(onContinuePress), Gesture.Fling()
    .direction(Directions.RIGHT )
    .onEnd(onBack))

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor={'#15141A'} />
      <View style={styles.stepCountContainer}>
        {onboardingData.map((step, index) => (
            <View
                key={index}
                style={[
                styles.stepCountIndicator,
                {backgroundColor: index === screenIndex ? '#CEF202' : '#FDFDFD'},
            ]}
          />
        ))}
      </View>
      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent} key={screenIndex}>
          <Animated.View 
            entering={BounceIn.delay(500)}
            exiting={BounceOut}
          >
            <Icon
            name={data.icon}
            size={150}
            color="#CEF202"
            style={styles.image}
            />
          </Animated.View>
          <View style={styles.pageFooter}>
            <Animated.Text 
              entering={SlideInLeft.duration(1000)}
              exiting={SlideOutRight}  
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <View>
              <Animated.Text 
                entering={SlideInLeft.delay(1000)}
                exiting={SlideOutRight}  
                style={styles.description} 
              >
              {data.description}
              </Animated.Text>
            </View>
            <View style={styles.buttonRow}>
              <Text onPress={onSkipPress} style={styles.buttonText}>
                Skip
              </Text>
              <Pressable
                onPress={onContinuePress}
                style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}
