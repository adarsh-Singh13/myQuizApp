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

export default function QuizHeaderContent({ OnPressTimeIcon, onFilterPressed, QuizTitleText, QuizTitleTime,isActive }: any) {
  // console.log(QuizTitleTime);
  
  return (
    <View style={styles.headerContainer}>
     <View style={styles.innerContainer}>
     <View style={{marginTop: hp('0.9%')}}>
        <Icons
          name={'pause-circle-outline'}
          size={30}
          color={'#110c0c'}
          style={styles.iconPause}
          onPress={OnPressTimeIcon}
        />
      </View> 
      <View style={styles.quizTitleCont}>
        <View>
          <Text style={styles.quizTitleText}>{QuizTitleText}</Text>
        </View>
        <View style={styles.timerStyle}>
        {/* <Text style={styles.quizTitleText}>{QuizTitleText}</Text> */}
        <CountdownTimer isActive={isActive} initialTime={QuizTitleTime} />
        </View>
      </View>
      <View style={styles.select}>
        <Icon
          name={'g-translate'}
          size={30}
          color={'#000000'}
          style={styles.iconPause}
          // onPress={OnPressTranslate}
        />
      </View>
      <View style={styles.select1}>
        <Icon
          name={'filter-list'}
          size={30}
          color={'#000000'}
          style={styles.iconPause}
          onPress={onFilterPressed}
        />
      </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginLeft: wp('1%'),
    paddingTop: 8,
    paddingBottom: 8,
    elevation: 5,
    justifyContent: 'space-evenly'
  },
  innerContainer :{
    flexDirection: 'row',
  },
  iconPause: {
    marginLeft: wp('2%'),
  },
  quizTitleCont: {
    flexDirection: 'column',
    marginLeft: wp('1%'),
    width: wp('35%'),
    height: wp('12%'),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  quizTitleText: {
    color: '#000000',
    fontFamily: 'Rubik-SemiBold',
    marginLeft: wp('-3%'),
    marginBottom: wp('-4%'),
    marginTop: wp('4%'),
    zIndex:1,
    height: wp('6%'),
  },
  timerStyle: {
    marginLeft: wp('-3%'),
    marginTop: wp('-1%'),
    // marginRight: wp('12%'),
    flexGrow: 1,
    // alignItems: 'center',
  },
  select: {
    marginLeft: wp('26%'),
  },
  select1: {
    marginLeft: wp('1%'),
  },
});
