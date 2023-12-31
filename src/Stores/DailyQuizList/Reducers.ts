import { INITIAL_STATE } from "./InitialState";
import { QuizDataListTypes } from "./Actions";
import { createReducer, ActionReducerMapBuilder } from "@reduxjs/toolkit";

const getmyAllQuizListDetailsLoading = (state: typeof INITIAL_STATE) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      myAllQuizListDetailsLoader: true,
    },
  };
};

const getmyAllQuizListDetailsSuccess = (
  state: typeof INITIAL_STATE,
  action: { payload: { data: any } }
) => {
  const { data } = action.payload;
  return {
    ...state,
    myAllQuizListDetails: data,
    loaders: {
      ...state.loaders,
      myAllQuizListDetailsLoader: false,
    },
  };
};

const getmyAllQuizListDetailsFailure = (state: typeof INITIAL_STATE) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      myAllQuizListDetailsLoader: false,
    },
  };
};

export const reducer = createReducer(INITIAL_STATE, (builder: ActionReducerMapBuilder<typeof INITIAL_STATE>) => {
  builder
    .addCase(QuizDataListTypes.GET_MYALL_QUIZLIST_DETAILS_LOADING, getmyAllQuizListDetailsLoading)
    .addCase(QuizDataListTypes.GET_MYALL_QUIZLIST_DETAILS_SUCCESS, getmyAllQuizListDetailsSuccess)
    .addCase(QuizDataListTypes.GET_MYALL_QUIZLIST_DETAILS_FAILURE, getmyAllQuizListDetailsFailure);
});
