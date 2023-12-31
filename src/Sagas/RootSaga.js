import { all } from 'redux-saga/effects';
import { fetchAllQuizzesSaga } from './DailyQuizDataSaga';

export default function* rootSaga() {
  yield all([
    fetchAllQuizzesSaga(),
    // Include other sagas if have more
  ]);
}
