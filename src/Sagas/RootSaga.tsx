import { ForkEffect, all, fork, takeLatest } from "redux-saga/effects";
import { QuizDataListTypes } from "../Stores/DailyQuizList/Actions";
import { networkSaga, offlineActionTypes } from "react-native-offline";


import { fetchAllQuizzesSaga } from "./DailyQuizDataSaga";
import { ConnectivityArgs } from "react-native-offline/dist/src/types";


export default function* rootSaga () {
    yield all([
      fork({
        context: yourContext,
        fn: networkSaga as (args?: ConnectivityArgs | undefined) => Generator<ForkEffect<void>, void, unknown>
      }),
      
        takeLatest(offlineActionTypes.CONNECTION_CHANGE, runQueue),

        takeLatest(QuizDataListTypes.GET_MYALL_QUIZLIST_DETAILS, fetchAllQuizzesSaga),

    ])
}