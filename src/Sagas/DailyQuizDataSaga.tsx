import { call, put, takeLatest } from 'redux-saga/effects';
import { QuizDataListTypes } from '../Stores/DailyQuizList/Actions';
import  { DailyQuizService }  from '../service/Api/DailyQuizService';

interface ActionPayload {
  payload: any; 
}

export function* fetchAllQuizzesSaga(payload: ActionPayload): Generator<any, void, any> {
  console.log("Get Daily Quiz Response:", payload);
  
  yield put(QuizDataListTypes.GET_MYALL_QUIZLIST_DETAILS_LOADING());

  try {
    let successData = yield call(DailyQuizService.getDailyQuizData, payload);

    if (successData) {
      yield put(QuizDataListTypes.GET_MYALL_QUIZLIST_DETAILS_SUCCESS(successData));  
    } else {
      yield put(QuizDataListTypes.GET_MYALL_QUIZLIST_DETAILS_FAILURE());
    }
  } catch (error) {
    console.warn('Error in Fetching ALl Quiz List:', error)
    yield put(QuizDataListTypes.GET_MYALL_QUIZLIST_DETAILS_FAILURE()); 
  }
}


