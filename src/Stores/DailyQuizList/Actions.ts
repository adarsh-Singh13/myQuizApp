import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions ({
  fetchMyAllQuizListDetails: ['payload'],
  fetchMyAllQuizListDetailsLoading: null,
  fetchMyAllQuizListDetailsSuccess: ['data'],
  fetchMyAllQuizListDetailsFailure: ['data'],
})


export const QuizDataListTypes = Types;
export default Creators;