import axios from "axios"

export default function Create() {
  const addNewQuestion = async event =>{
    event.preventDefault();
    const questionTxt=event.target.question.value;
    let choicesTxt=event.target.choice.value;
    choicesTxt=choicesTxt.split(",");
    console.log(choicesTxt);
    // console.log(event.target.question.value);
    // console.log(event.target.choice.value);
     axios.post('https://polls.apiblueprint.org/questions?page=1', {
       "question": questionTxt,
       "choices": choicesTxt
     })
     .then(function (response) {
       window.location.href = "/questions"
     })
     .catch(function (error) {
       console.log(error);
     });
  }
  return (
    <div>
      <form onSubmit={addNewQuestion}>
        <label>Question: </label>
        <input type="text" name="question" className="question" placeholder="What is your favourite color?"/>
        <br/>
        <label>Choice: </label>
        <input type="text" name="choice" className="question" placeholder="Please enter your choices with ','"/>
        <button type="submit" >Add</button>
      </form>
    </div>  
  )
}
  