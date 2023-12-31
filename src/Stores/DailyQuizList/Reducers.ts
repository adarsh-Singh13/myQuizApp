import { INITIAL_STATE } from "./InitialState";
import { QuizDataListTypes } from "./Actions";
import { createReducer, Reducer } from 'reduxsauce';

interface MyState {
  loaders: {
    myAllQuizListDetailsLoader: boolean;
    myAllQuizListDetailsLoader2: boolean; 
  };
  MyAllQuizListDetails: any; 
}

const fetchMyAllQuizListDetailsLoading: Reducer<MyState> = (state: { loaders: any; }) => ({
  ...state,
  loaders: {
    ...state.loaders,
    myAllQuizListDetailsLoader: true,
  },
});

const fetchMyAllQuizListDetailsSuccess: Reducer<MyState> = (state: { loaders: any; }, { data }: any) => ({
  ...state,
  MyAllQuizListDetails: data,
  loaders: {
    ...state.loaders,
    myAllQuizListDetailsLoader: false,
  },
});

const fetchMyAllQuizListDetailsFailure: Reducer<MyState> = (state: { loaders: any; }) => ({
  ...state,
  loaders: {
    ...state.loaders,
    myAllQuizListDetailsLoader2: false,
  },
});

export const reducer = createReducer(INITIAL_STATE, {
  [QuizDataListTypes.GET_MY_ALL_QUIZ_LIST_DETAILS_LOADING]: fetchMyAllQuizListDetailsLoading,
  [QuizDataListTypes.GET_MY_ALL_QUIZ_LIST_DETAILS_SUCCESS]: fetchMyAllQuizListDetailsSuccess,
  [QuizDataListTypes.GET_MY_ALL_QUIZ_LIST_DETAILS_FAILURE]: fetchMyAllQuizListDetailsFailure,
});
