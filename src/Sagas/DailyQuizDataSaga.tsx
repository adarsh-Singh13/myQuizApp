import { call, put, takeLatest, CallEffect, PutEffect } from 'redux-saga/effects';
import { QuizActionTypes, fetchQuizzesFailure, fetchQuizzesSuccess, FetchQuizzesFailureAction, FetchQuizzesSuccessAction } from '../Stores/DailyQuizlist/Actions';
import { DailyQuizService } from '../service/Api/DailyQuizService';

export function* fetchAllQuizzesSaga({ payload }: { payload: any }): Generator<
  CallEffect<any> | PutEffect<FetchQuizzesSuccessAction | FetchQuizzesFailureAction>,
  void,
  any
> {
  try {
    const quizData = yield call(DailyQuizService.getDailyQuizData, payload);

    if (quizData) {
      yield put(fetchQuizzesSuccess(quizData)); // Dispatch success action with retrieved data
    } else {
      yield put(fetchQuizzesFailure('Error: Unable to fetch quiz data')); // Dispatch failure action if data fetching fails
    }
  } catch (error : any) {
    yield put(fetchQuizzesFailure(error)); // Dispatch failure action if an error occurs
  }
}

