
export class trivia {

  constructor(data) {
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correctAnswer
    this.incorrect_answers = data.incorrect_answers
  }

}