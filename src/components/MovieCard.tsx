import { Card, Container, Button } from "react-bootstrap";

const items = [
  { title: "Card 1", text: "This is the first card." },
  { title: "Card 2", text: "This is the second card." },
  { title: "Card 3", text: "This is the third card." },
];

const MovieCard: React.FC = () => {
  return (
    <Container className="my-4 d-flex flex-column align-items-center">
      {items.map((item, idx) => (
        <Card
          key={idx}
          className="mb-3"
          style={{ width: "100%", maxWidth: "500px" }}
        >
          <Card.Body>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.text}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Go somewhere</Button>
          </Card.Footer>
        </Card>
      ))}
    </Container>
  );
};

export default MovieCard;
