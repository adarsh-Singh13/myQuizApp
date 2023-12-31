import axios from 'axios';

function in200s(status: number) {
  return status >= 200 && status < 300;
}

const getAllQuizApiClient = axios.create({
  baseURL: 'https://mocki.io/v1/6496bf6c-838b-46ee-bb25-c303bddc8aec',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

 function getDailyQuizData(params: { token: string }) {
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
  getDailyQuizData,
};

