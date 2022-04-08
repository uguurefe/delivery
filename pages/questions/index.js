import axios from "axios"
import Link from 'next/link'
import { Container,Row,Col,ListGroup,Button } from 'react-bootstrap';

export default function Question({stars}) {
  const listItems = stars.map((el,id) =>
    <Link href={el.url}>
      <ListGroup.Item key={id}>
        <a className="text-decoration-none text-dark">{el.question}</a>
      </ListGroup.Item>
    </Link>
  );
  return (
    <Container className="my-4">
      <Row>
        <Col></Col>
        <Col>
          <h1 className="text-center">Questions</h1>
        </Col>
        <Col>
          <Button variant="success ">
            <Link href="/questions/create">
              <a className="text-decoration-none text-dark">Add Question</a>
            </Link>
          </Button>{' '}
        </Col>
      </Row>
      <Row>
        <ListGroup>{listItems}</ListGroup>
      </Row>
    </Container>
  )
}
Question.getInitialProps = async (ctx) => {
  const res = await axios('https://polls.apiblueprint.org/questions')
  const json = await res.data
  console.log(res.data);
  return { stars: json }
}
