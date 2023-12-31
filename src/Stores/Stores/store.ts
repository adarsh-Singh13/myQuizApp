// reducers/index.ts
import { combineReducers } from 'redux';
import quizReducer from '../DailyQuizList/Reducers';

const rootReducer = combineReducers({
  quiz: quizReducer,
  //later add the other reducers
});

export default rootReducer;
