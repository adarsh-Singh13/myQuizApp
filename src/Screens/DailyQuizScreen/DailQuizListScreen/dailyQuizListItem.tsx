import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, ScrollView, View } from 'react-native'
import CustomdailyQuiz from './customdailyQuiz'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import { connect } from 'react-redux';
import MyAllQuizLIstActions from '../../../Stores/DailyQuizList/Actions';


const  DailyQuizListItem = function ({ quizData, myAllQuizListDetails }: any) {

  useEffect(() => {
    myAllQuizListDetails();
  }, [myAllQuizListDetails]);


  console.log('Quiz Data:', myAllQuizListDetails);
  console.log('Quiz Data:', quizData);

  const quizDataRender = () => {
    // console.log("itemDDD===", item);
    return <CustomdailyQuiz quizData={quizData} />;
  }

  return (
    <View style={styles.container}>
      {quizData && quizData.dailyQuizList && quizData.dailyQuizList.length > 0 ? (
        <FlatList
          data={quizData.dailyQuizList}
          renderItem={quizDataRender}
          scrollEnabled
          scrollToOverflowEnabled
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatlist}
        />
      ) : (
        []
      )}
    </View>
  )
}


const mapStateToProps = (state: { quiz: { quizData: any; }; }) => ({
  quizData: state.quiz.quizData, 
});

const mapDispatchToProps = (dispatch: any) => ({
  myAllQuizListDetails: (data: any) => dispatch(MyAllQuizLIstActions.GET_MYALL_QUIZLIST_DETAILS(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyQuizListItem);


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginBottom: hp('4%'),
  },
  flatlist :{
    backgroundColor: '#FFFFFF'
  },
})

