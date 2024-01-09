import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, ScrollView, View } from 'react-native';
import CustomdailyQuiz from './customdailyQuiz';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function  DailyQuizListItem ({ quizData, allQuizList }: any) {

  const [allQuizdata, setAllQuizData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://mocki.io/v1/e35c62ea-4b53-45fa-b51b-a928f121fb62";
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setAllQuizData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  //console.log("itemDDD===", allQuizdata);

  const quizDataRender = (item: any) => {
    // console.log("itemDDD===", item);
    return <CustomdailyQuiz quizData={item} />;
  }

  return (
    <View style={styles.container}>
      {/* {quizData && quizData.dailyQuizList && quizData.dailyQuizList.length > 0 ? ( */}
        <FlatList
          data={allQuizdata}
          renderItem={({item}) => {
            return (quizDataRender(item))
          }}
          scrollEnabled 
          scrollToOverflowEnabled
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatlist}
        />
      {/* ) : (
        []
      )} */}
    </View>
  )
}


// const mapStateToProps = (state: any ) => {
//   console.log("SSS", state);
  
//  return { 
//   quizData: state.quiz.MyAllQuizListDetails,
//  }
// }

// const mapDispatchToProps = (dispatch: any) => ({
//   allQuizList: (params: any) => dispatch(QuizDataListTypes.FET),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(DailyQuizListItem);

// https://mocki.io/v1/6496bf6c-838b-46ee-bb25-c303bddc8aec
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginBottom: hp('4%'),
  },
  flatlist :{
    backgroundColor: '#FFFFFF'
  },
})
