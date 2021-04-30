import { Card, Container } from "react-bootstrap";

function About() {
  return (
    <Container style={{ height: "40vh" }}>
      <Card className="mt-5" style={{ height: "80%" }}>
        <Card.Header className="text-white bg-info text-center">
          This is an initiative by a like minded volunteers to help the people
          affected by Covid
        </Card.Header>
        <Card.Body style={{ backgroundColor: "azure" }}>
          <Card.Text>
            <p></p>
            <p>
              People affected by Covid may need help like finding the Oxygen,
              Ambulance, Plasma, Medicines etc. Most of the sources while
              finding these details are not credible and an ample amount of time
              is wasted before getting the right help. The time wasted in this
              process may lead to critical situation.
            </p>
            <p>
              This portal aims at reducing this time by providing the details of
              the credible sources frequently verified by our team of
              volunteers.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
