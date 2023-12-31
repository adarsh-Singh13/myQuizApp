import { call, put, takeLatest } from 'redux-saga/effects';
import { QuizDataListTypes } from '../Stores/DailyQuizList/Actions';
import  { DailyQuizService }  from '../service/Api/DailyQuizService';


export function* fetchAllQuizzesSaga(payload) {
  console.log("Get Daily Quiz Response:", payload);
  
  yield put(QuizDataListTypes.fetchMyAllQuizListDetailsLoading());

  try {
    let successData = yield call(DailyQuizService.getDailyQuizData, payload);

    if (successData) {
      yield put(QuizDataListTypes.fetchMyAllQuizListDetailsSuccess(successData));  
    } else {
      yield put(QuizDataListTypes.fetchMyAllQuizListDetailsFailure());
    }
  } catch (error) {
    console.warn('Error in Fetching ALl Quiz List:', error)
    yield put(QuizDataListTypes.fetchMyAllQuizListDetailsFailure()); 
  }
}


