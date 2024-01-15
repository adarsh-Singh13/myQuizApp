import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/AntDesign';
import Stepper from 'react-native-stepper-ui';

export default function DrawerContent(params) {
  const route = useRoute();
  const {quizData} = route.params;
  
  let quizDataArray = quizData.totalQuestions;
  
  const [selectedOption, setSelectedOption] = useState(null);

  const selectedAnswerHandler = (index) => {
    setSelectedOption(index);
  }

  const updatedQuizDataArray = [...quizDataArray];

  return (
    <DrawerContentScrollView contentContainerStyle={styles.drawerStyle}>
      <View style={styles.mainContainer}>
        <View style={styles.drawerHeader}>
          <View style={styles.drawerHeader}>
            <Text style={styles.drawerHeaderText}>{quizData.topic}</Text>
          </View>
          <View style={styles.drawerHeaderQuest}>
            <Text style={styles.drawerQuestionText}>Question :</Text>
            <Text style={styles.drawerQuestionTexts}>
              {quizData.totalQuestions.length}
            </Text>
          </View>
          <View style={styles.bottomLine} />
          <View style={styles.numberTextViewContainer}>
            {
              quizDataArray.map((item, index) => {
                return (
                  <View key={index} style={[styles.numberTextViewcont, {backgroundColor: selectedOption === index ? '#26A72F' : '#d4d4d4'}]}>
                    <View style={styles.numberTextView}>
                    <Text style={styles.numberText} key={index}>{index + 1}</Text>
                    </View>
                  </View>
                )
              })
            }
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomLine2} />
            <View style={styles.iconMainCont}>
              <View
                style={styles.iconWrap}>
                <View
                  style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                  <Icons name="checkcircle" color={'#cd450f'} size={30} />
                  <Text>Answered</Text>
                </View>
                <View
                  style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                  <Icons name="checkcircle" color={'#c1c1c1'} size={30} />
                  <Text>Not Answered</Text>
                </View>
              </View>
              <View style={styles.iconWrap}>
                <View
                  style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                  <Icons name="checkcircle" color={'#470296'} size={30} />
                  <Text>Review</Text>
                </View>
                <View
                  style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                  <Icons name="checkcircleo" color={'#7c7a7a'} size={30} />
                  <Text>Not Visited</Text>
                </View>
              </View>
              <View
                style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <Icons name="checkcircle" color={'#008147'} size={30} />
                <Text>Marked for review and Answered</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    marginTop: hp('0%'),
    backgroundColor: '#e8e8e8',
    flex: 1,
    justifyContent: 'space-between',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  drawerHeader: {
    flexDirection: 'column',
  },
  drawerHeader: {
    margin: 2,
  },
  drawerHeaderText: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: wp('2%'),
    marginTop: wp('2%'),
  },
  drawerHeaderQuest: {
    flexDirection: 'row',
  },
  drawerQuestionText: {
    marginLeft: wp('2.6%'),
    letterSpacing: 0.75,
  },
  drawerQuestionTexts: {
    marginLeft: wp('0.95%'),
    marginTop: hp('0.1%'),
  },
  bottomLine: {
    marginTop: hp('1%'),
    width: wp('100%'),
    borderBottomWidth: 0.5,
    borderColor: '#989494',
    elevation: 2,
  },
  bottomLine2: {
    marginBottom: hp('1.5%'),
    borderEndWidth: wp('100%'),
    borderBottomWidth: 0.5,
    borderColor: '#989494',
    // elevation: 2,
  },
  bottomContainer: {
    // position: 'absolute',
    bottom: 1,
    top: 500,
    width: '100%',
    backgroundColor: '#e8e8e8', 
    padding: 1, 
    // elevation: 2, 
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  iconMainCont: {
    marginVertical: hp('0.3%'),
    marginLeft: hp('1.3%'),
  },
  iconWrap : {
    flexDirection: 'row', 
    gap: 12, 
    marginBottom: hp('1.5%')
  },
  numberText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 5,
    marginLeft: -1,
  },
  numberTextViewContainer :{
    flex: 1,
    gap: 15,
    marginTop: hp('1.6%'),
    marginLeft: hp('1.2%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  numberTextViewcont: {
    borderRadius: 50,
    marginTop: hp('0.5%'),
    width: wp('10%'),
    height: hp('5%'),
    borderWidth: 2,
    borderColor: '#a4a2a2'
  },
  numberTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
