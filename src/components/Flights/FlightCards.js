import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import data from "../Data/flights.json";
import { Table } from "reactstrap";

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
              <Table hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>

              <CardText>text he re £ content.</CardText>
              <Button color="success">Book Now</Button>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default FlightCards;
