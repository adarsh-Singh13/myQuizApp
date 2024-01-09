import React, { useState, useEffect } from 'react'
import { Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { HelperService } from '../../../service/util/HelperService';
import Icon  from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


export default function CustomdailyQuiz({ quizData }: any): React.JSX.Element {
  // console.log('Received Quiz Data:', quizData); 
  const [showDownload, setShowDownload] = useState(true);


  const navigation = useNavigation();
  
  // console.log("mmmm", quizData.quizId, quizData.title);
  
  const handlePressNew = () => {
    if (!showDownload){
      navigation.navigate('Instructions', { quizId: quizData.quizId, quizData: quizData } as {quizId: any, quizData: any});
    }
  };


  const handlePressIconChange = () => {
    if (showDownload) {
      // console.log('Download action');
      setShowDownload(false);
    } else {
      navigation.navigate('Instructions', { quizId: quizData.quizId, quizData: quizData } as {quizId: any, quizData: any});
    }
  };

  return (
    <SafeAreaView>
      <Pressable onPress={handlePressNew} style={styles.mainContainer}>
        <View style={styles.imageTextContainer}>
          <Image
            source={require('../../../Assets/images/MYSTY1.png')}
            // resizeMode='stretch'
            style={styles.image}
          />
          <View style={styles.imagetexView}>
            <Text style={styles.imagetexts}>{quizData.title}</Text>
          </View>
        </View>
        <View style={styles.quizallTextAndIconCont}>
          <View style={{flexDirection: "row", 
          width: wp('66%'),
          height: wp('18%'),
          position: "absolute",
          // backgroundColor: "red"
          flexWrap: "wrap"
          }}>
            <Text style={styles.quizTopicTitle}>{quizData.topic} :</Text>
            <Text style={styles.quizTopicTitle}> {quizData.title} </Text>
            <Text style={[styles.quizTopicTitle, { letterSpacing: 0.3,}]}>{HelperService.currentDateStringWithDotFormat()}</Text>
          </View>
          <TouchableOpacity style={styles.icon} onPress={handlePressIconChange}>
          {showDownload ? (
            <React.Fragment>
              <Icon name='download' size={15} color={'red'} />
              <Text style={styles.getQuizTxt}>Get Quiz</Text>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Text style={styles.getQuizTxt2}>Attempt </Text>
              <Icon name='right' size={15} color={'#5EDB0A'} />
            </React.Fragment>
          )}
        </TouchableOpacity>
          <View style={styles.bottomContainer}>
            <Text style={styles.timeText}>{quizData.totalQuestions.length} Ques</Text>
            <View style={styles.dot}/>
            <Text style={styles.timeText}>{HelperService.secToMinConvert({sec : quizData.timing})} Min</Text>
            <View style={styles.dot}/>
            <Text style={styles.timeText}>{quizData.rewards} Coins</Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.bottomMargin}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row'
  },
  imageTextContainer: {
    elevation: 3,
    marginLeft: wp('2.5%'),
    marginTop: wp('3%'),
    flexDirection: 'column',
  },
  image: {
    width: wp('30%'),
    height: wp('32%'),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E5E1E1",
  },
  imagetexView: {
    position: 'absolute',
    backgroundColor: "#000000",
    width: wp("30%"),
    height: wp("8%"),
    borderRadius: 4,
    marginTop: wp('25%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagetexts: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: '700',
  },
  quizallTextAndIconCont: {
    marginHorizontal: wp('2%'),
    marginTop: wp('4%'),
  },
  quizTopicTitle: {
    fontSize: 17,
    color: "#000000",
    fontFamily: "Inter-Regular",
  },
  icon: { 
    marginLeft: wp('43%'),
    marginTop: wp('18%'),
    flexDirection: 'row',
  },
  getQuizTxt: {
    color: "red",
    marginTop: hp('-0.1%'),
    marginLeft: wp('0.6%'),
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 13,
  },
  getQuizTxt2: {
    color: "#5EDB0A",
    marginTop: hp('-0.1%'),
    marginLeft: wp('0.6%'),
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 13,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: hp('1%')
  },
  dot: {
    width: wp('1.5%'),
    height: wp('1.5%'),
    backgroundColor: "#AEAEAE", 
    borderRadius: 50,
    marginTop: hp('1.6%'),
    marginHorizontal: 5
  },
  timeText: {
    fontFamily: "NotoSansDevanagari-Medium",
    // marginTop: hp('0.3%'),
    color: "#B0B0B0",
    fontSize: 14,
  },
  bottomMargin: {
    width: wp('94%'),
    borderBottomWidth: 1,
    marginTop: hp('2%'), 
    justifyContent: 'center', 
    alignSelf: 'center', 
    borderColor: "#CFCBCB",
  },
})