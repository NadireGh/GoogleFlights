import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import data from "../Data/flights.json";
const FlightCards = props => {
  console.log("data here", data);
  return (
    <Row>
      {data["itineraries"].map(each => {
        return (
          <Col>
            <Card body>
              <CardTitle>
                {each.agent} <h2>{each.price.replace("Â", "")}</h2>
              </CardTitle>
              <CardText>text he re £ content.</CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default FlightCards;
