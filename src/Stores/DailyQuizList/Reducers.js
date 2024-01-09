import { INITIAL_STATE } from "./InitialState";
import { QuizDataListTypes } from "./Actions";
import { createReducer } from 'reduxsauce';

const fetchMyAllQuizListDetailsLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    myAllQuizListDetailsLoader: true,
  },
});

const fetchMyAllQuizListDetailsSuccess = (state) => ({
  ...state,
  MyAllQuizListDetails: data,
  loaders: {
    ...state.loaders,
    myAllQuizListDetailsLoader: false,
  },
});

const fetchMyAllQuizListDetailsFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    myAllQuizListDetailsLoader2: false,
  },
});

export const reducer = createReducer(INITIAL_STATE, {
  [QuizDataListTypes.FETCH_MY_ALL_QUIZ_LIST_DETAILS_LOADING]: fetchMyAllQuizListDetailsLoading,
  [QuizDataListTypes.FETCH_MY_ALL_QUIZ_LIST_DETAILS_SUCCESS]: fetchMyAllQuizListDetailsSuccess,
  [QuizDataListTypes.FETCH_MY_ALL_QUIZ_LIST_DETAILS_FAILURE]: fetchMyAllQuizListDetailsFailure,
});
