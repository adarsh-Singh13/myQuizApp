import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; 
import { reducer as quizReducer } from '../DailyQuizList/Reducers'; 

// Combine your reducers if you have multiple reducers
const rootReducer = combineReducers({
  quiz: quizReducer,
  // Other reducers go here if you have them
});


// Create the store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

// Run your sagas using sagaMiddleware.run(sagaFunction) if you're using sagas

export default store;
