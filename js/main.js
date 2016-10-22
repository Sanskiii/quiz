// answers
var answersArray = ["true", "true", "false", "true", "true", "false", "true", "true", "false", "true"]
var userInput = document.getElementsByTagName('input')
console.log(userInput)
//empty array
var userAnswers = []
var correctAnswers = 0
var wrongAnswers = 0



function getInfo() {
  for (var i = 0; i < answersArray.length; i++) {
    // console.log(userInput[i].value)
    userAnswers.push(userInput[i].value.toLowerCase())
  }
  // console.log(userAnswers)
  for (var i = 0; i < answersArray.length; i++) {
    if (answersArray[i] == userAnswers[i]) {
      correctAnswers++
    } else {
      wrongAnswers++
    }
  }
  console.log(correctAnswers)
  console.log(wrongAnswers)
}