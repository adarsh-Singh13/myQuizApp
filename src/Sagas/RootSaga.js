import { all, fork, take, takeLatest } from "redux-saga/effects";
import { fetchAllQuizzesSaga } from './DailyQuizDataSaga';
import { QuizDataListTypes, fetchMyAllQuizListDetails } from "../Stores/DailyQuizList/Actions";
import { networkSaga, offlineActionTypes } from "react-native-offline";

export default function* root() {
  yield all([
    fork(networkSaga, {
      pingInterval: 30000,
    }),
    
    takeLatest(QuizDataListTypes.FETCH_MY_ALL_QUIZ_LIST_DETAILS, fetchMyAllQuizListDetails), 

  ]);
}