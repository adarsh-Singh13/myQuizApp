import { combineReducers } from 'redux';
import { reducer as QuizDataListReducer} from '../../DailyQuizList/Reducers';

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  quiz: QuizDataListReducer,
});

export default rootReducer;
