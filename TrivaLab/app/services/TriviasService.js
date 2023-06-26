import { triviaApi } from "./AxiosService"




class TriviaService {
  async getTrivia() {

    const response = await triviaApi.get('trivia')
    console.log('got trivia', response.data);
  }
}
























export const triviaService = new TriviaService()