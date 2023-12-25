/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CountdownTimer from '../../../Components/countDownTimer';
import quizData from '../../../DummyData/QuizData/DailyQuiz.json';

export default function QuizHeaderContent() {
  return (
    <View style={styles.headerContainer}>
      <View style={{marginTop: hp('1%')}}>
        <Icons
          name={'pause-circle-outline'}
          size={30}
          color={'#110c0c'}
          style={styles.iconPause}
          onPress={() => {}}
        />
      </View>
      <View style={styles.quizTitle}>
        <Text style={styles.quizTitleText}>{quizData[0].title}</Text>
        <CountdownTimer isActive initialTime={quizData[0].timing} />
      </View>
      <View style={styles.select}>
        <Icon
          name={'g-translate'}
          size={30}
          color={'#000000'}
          style={styles.iconPause}
          onPress={() => {}}
        />
      </View>
      <View style={styles.select1}>
        <Icon
          name={'filter-list'}
          size={30}
          color={'#000000'}
          style={styles.iconPause}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginLeft: wp('1%'),
    padding: 8,
  },
  iconPause: {
    marginLeft: wp('2%'),
  },
  quizTitle: {
    flexDirection: 'column',
    marginLeft: wp('7%'),
  },
  quizTitleText: {
    color: '#000000',
    fontFamily: 'Rubik-SemiBold',
  },
  select: {
    marginLeft: wp('28%'),
  },
  select1: {
    marginLeft: wp('2%'),
  },
});
