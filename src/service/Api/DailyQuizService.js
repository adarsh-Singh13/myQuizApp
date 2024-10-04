import axios from 'axios';

function in200s(status) {
  return status >= 200 && status < 300;
}

const getAllQuizApiClient = axios.create({
  baseURL: 'https://mocki.io/v1/46b1e508-9357-4dd5-ab8f-3a4ab460f548 ',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

 function fetchMyAllQuizListDetails(params) {
  console.log("FETCH RESPDATA", params);
  
    return getAllQuizApiClient.get('', {
      headers: {
        token: params.token,
      },
    }).then(response => {
      console.log("RESPDATA", response);
      
      if (in200s(response.status)) {
        return response.data;
      }
      return null;  
    }).catch (error => {
      console.log("errror in Qt my all QUiz List", error);
      return null;
    })
  } 

export const DailyQuizService = {
  fetchMyAllQuizListDetails,
};

