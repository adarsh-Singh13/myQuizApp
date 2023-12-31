import { createAction } from "@reduxjs/toolkit";

const GET_MYALL_QUIZLIST_DETAILS = createAction('getmyAllQuizListDetails', (payload) => ({
  payload, // Data coming from the form will go into 'payload' when this action is called
}));

const GET_MYALL_QUIZLIST_DETAILS_LOADING = createAction('getmyAllQuizListDetailsLoading');

const GET_MYALL_QUIZLIST_DETAILS_SUCCESS = createAction('getmyAllQuizListDetailsSuccess', (data) => ({
  payload: data,
}));

const GET_MYALL_QUIZLIST_DETAILS_FAILURE = createAction('getmyAllQuizListDetailsFailure', (errorMessage) => ({
  payload: errorMessage,
}));

export const QuizDataListTypes = {
  GET_MYALL_QUIZLIST_DETAILS,
  GET_MYALL_QUIZLIST_DETAILS_LOADING,
  GET_MYALL_QUIZLIST_DETAILS_SUCCESS,
  GET_MYALL_QUIZLIST_DETAILS_FAILURE,
};

export default {
  GET_MYALL_QUIZLIST_DETAILS,
  GET_MYALL_QUIZLIST_DETAILS_LOADING,
  GET_MYALL_QUIZLIST_DETAILS_SUCCESS,
  GET_MYALL_QUIZLIST_DETAILS_FAILURE,
};
