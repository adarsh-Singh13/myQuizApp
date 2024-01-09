import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // Define action creators with their respective payloads
  fetchMyAllQuizListDetails: ['payload'],
  fetchMyAllQuizListDetailsLoading: null,
  fetchMyAllQuizListDetailsSuccess: ['data'],
  fetchMyAllQuizListDetailsFailure: ['errorMessage'],
});

// Export the action types and creators
export const QuizDataListTypes = Types;
export default Creators;
