import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import data from "../Data/flights.json";
import { Table } from "reactstrap";
import LAirways from "../Data/images/Luftansa.png";
import WizAir from "../Data/images/Wizzair.png";
import BritishAirways from "../Data/images/BritishAirways.png";

const FlightCards = props => {
  console.log("data here", data);
  const timeConvert = n => {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + " hour(s) and " + rminutes + " minute(s).";
  };
  const airways = {
    "British Airways": BritishAirways,
    "Wizz Air": WizAir,
    Lufthansa: LAirways
  };
  console.log(airways);

  return (
    <Row>
      {data["itineraries"].map(each => {
        let departures = data.legs.filter(leg => leg.id == each.legs[0]);
        console.log(departures);
        let arrivals = data.legs.filter(leg => leg.id == each.legs[1]);
        console.log(arrivals);
        return (
          <Col>
            <Card body>
              <CardTitle>
                {each.agent} <h2>{each.price.replace("Â", "")}</h2>
              </CardTitle>
              <Table hover>
                <thead>
                  <tr>
                    <th>Airline</th>
                    <th />

                    <th>Travel Between</th>
                    <th>Travel Duration</th>
                    <th>Airports</th>
                    <th>Stops</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        style={{ maxWidth: "65px" }}
                        src={airways[departures[0].airline_name]}
                      />
                    </td>
                    <th scope="row">{departures[0].airline_name}</th>

                    <td>
                      {departures[0].departure_time.split("T")[1]} |{" "}
                      {departures[0].arrival_time.split("T")[1]}
                    </td>
                    <td>{timeConvert(departures[0].duration_mins)}</td>

                    <td>
                      {departures[0].departure_airport} -{" "}
                      {departures[0].arrival_airport}
                    </td>
                    <td>{departures[0].stops} Stops</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        style={{ maxWidth: "65px" }}
                        src={airways[arrivals[0].airline_name]}
                      />
                    </td>
                                        <th scope="row">{arrivals[0].airline_name}</th>

                    <td>
                      {arrivals[0].departure_time.split("T")[1]} |{" "}
                      {arrivals[0].arrival_time.split("T")[1]}
                    </td>
                    <td>{timeConvert(arrivals[0].duration_mins)}</td>

                    <td>
                      {arrivals[0].departure_airport} -{" "}
                      {arrivals[0].arrival_airport}
                    </td>
                    <td>{arrivals[0].stops} Stops</td>
                  </tr>
                </tbody>
              </Table>

              <CardText />
              <Button
                color="success"
                onClick={() => {
                  alert("You request has been succesfully delivered!");
                }}
              >
                Book Now
              </Button>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default FlightCards;
