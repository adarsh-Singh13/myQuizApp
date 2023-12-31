import quizData from '../../DummyData/QuizData/DailyQuiz.json';

function mockAPIRequest(url: string, config: any) {
  return new Promise((resolve, reject) => {
    // Simulating response
    const simulatedResponse = {
      status: 200,
      data: {
        data: quizData 
      }
    };

    setTimeout(() => {
      if (in200s(simulatedResponse.status)) {
        resolve(simulatedResponse);
      } else {
        reject('Error occurred');
      }
    }, 1000);
  });
}

function in200s(status: number) {
  return status >= 200 && status < 300;
}

export function getDailyQuizData(params: any) {
  let url = ''; 
  
  return mockAPIRequest(url, {
    headers: {
      token: params.token,
    }
  })
    .then((response: any) => {
      if (in200s(response.status)) {
        return response['data']['data'];
      }
      return null;
    })
    .catch(error => {
      return null;
      console.log("error in getDailyQuizData :", error);
      
    });
}

export const DailyQuizService = {
  getDailyQuizData,
};
