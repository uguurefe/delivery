import axios from "axios"
import { Container,Row,Col,Button } from 'react-bootstrap';

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
      <Container className="my-4">
        <Row>
          <Col></Col>
          <Col>
            <form onSubmit={addNewQuestion}>
              <label>Question: </label>
              <input type="text" name="question" className="question form-control" placeholder="What is your favourite color?"/>
              <br/>
              <label>Choice: </label>
              <input type="text" name="choice" className="question form-control" placeholder="Please enter your choices with ','"/>
              <br/>
              <Button type="submit" variant="success ">Add</Button>
            </form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
  )
}
  