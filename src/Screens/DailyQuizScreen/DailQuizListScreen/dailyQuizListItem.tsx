import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, ScrollView, View } from 'react-native'
import CustomdailyQuiz from './customdailyQuiz'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import { connect } from 'react-redux';
import QuizDataListTypes from '../../../Stores/DailyQuizList/Actions';


const  DailyQuizListItem = ({ quizData, allQuizList }: any) => {

  useEffect(() => {
    allQuizList();
  }, [allQuizList]);


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


const mapStateToProps = (state: any ) => {
  console.log("SSS", state);
  
 return { 
  quizData: state.quiz.MyAllQuizListDetails,
 }
}

const mapDispatchToProps = (dispatch: any) => ({
  allQuizList: (params: any) => dispatch(QuizDataListTypes.fetchMyAllQuizListDetails(params)),
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
