import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, ScrollView, View } from 'react-native'
import CustomdailyQuiz from './customdailyQuiz'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import { fetchQuizzes } from '../../../Stores/DailyQuizList/Actions';
import { useSelector, useDispatch } from 'react-redux';

// export default function DailyQuizListItem() {
//   const [quizId, setQuizId] = useState()

//   const dispatch = useDispatch();
  
//   useEffect(() => {
//     dispatch(fetchQuizzes());
//   }, [dispatch]);
  
//   const quizData = useSelector((state: any) => state.dailyQuizList);
//   console.log('Quiz Data:', quizData);
//   const handleMyQuizListItems = () => {};

//   const quizDataRender = ({ item }: { item: any }) => {
//     console.log("ITEMS", item);
    
//     return <CustomdailyQuiz quizData={item} />;
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={quizData}
//         renderItem={quizDataRender}
//         scrollEnabled
//         scrollToOverflowEnabled
//         showsVerticalScrollIndicator={false}
//         keyExtractor={(item, index) => index.toString()}
//         style={styles.flatlist}
//       />
//       {/* <View style={{marginBottom: hp('10%')}}/> */}
//     </View>
//   )
// }

export default function DailyQuizListItem({ route }: any) {
  const dispatch = useDispatch();
  // const { selectedItem } = route.params;
  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);
  
  const quizData = useSelector((state: any) => state.quizzes);

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



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginBottom: hp('4%'),
  },
  flatlist :{
    backgroundColor: '#FFFFFF'
  },
})