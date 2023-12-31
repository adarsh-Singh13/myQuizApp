import { all, fork, takeLatest } from "redux-saga/effects";
import { QuizDataListTypes } from "../Stores/DailyQuizList/Actions";
import { networkSaga, offlineActionTypes } from "react-native-offline";
import { fetchAllQuizzesSaga } from "./DailyQuizDataSaga";


export default function* rootSaga () {
    yield all([
        fork(networkSaga, {
          pingInterval: 30000,
        }),

        takeLatest(QuizDataListTypes.GET_MYALL_QUIZLIST_DETAILS, GET_MYALL_QUIZLIST_DETAILS),

    ])
}