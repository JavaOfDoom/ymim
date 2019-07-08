import React, { Component } from "react";
import "./mid.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class LowerMid extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row className="lower-mid">
          <Col xs={1} sm={1} md={2} lg={2} xl={2}></Col>
          <Col xs={10} md={8} md={8} lg={8} xl={8}>
            <h2 className="text-center heading">What's New?</h2>
            <b>
              <h2 className="text-center sub-heading">
                Mar 9 2019 - Let's Do 300! Emergency Care Package Drive
              </h2>
            </b>
            <div className="line-paragraph">
              Join Young Masterbuilders In Motion on March 9th at Rogers Park
              Library to collect and package essential supplies for foster youth
            </div>
            <div className="line-paragraph">
              It's estimated that 5,000 youth age out of foster care in the
              Chicagoland area each year. Young Masterbuilders in Motion is
              working to reverse the impact of poverty by letting our teen girls
              and young adult women who have experienced foster care know that
              we care. We know it's an urgent situation. We need your support!
              Won't you join us?
            </div>
            <h2 className="sub-heading">RSVP and Find out More:</h2>
            <p>
              <h2 className="sub-heading">Eventbrite</h2>
              <Link
                to="/https://www.eventbrite.com/ymim"
                className="space-anchors"
                alt="Eventbrite"
              >
                https://www.eventbrite.com/ymim
              </Link>
            </p>
            <p>
              <h2 className="sub-heading">Facebook</h2>
              <Link
                to="/https://www.facebook.com/pg/theymim.events"
                className="space-anchors"
                alt="Facebook"
              >
                https://www.facebook.com/pg/theymim.events
              </Link>
            </p>
            <div>
              <button className="ym-button" id="enroll">
                All News
              </button>
              <button className="ym-button" id="enroll">
                All Events
              </button>
            </div>
          </Col>
          <Col xs={1} sm={1} md={2} lg={2} xl={2}></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={2} lg={2} xl={2}></Col>
          <Col xs="10" sm="10" md="4" lg="2" xl="2" className="text-center">
            <h2 className="foot-head">Inspiring</h2>
          </Col>
          <Col xs="10" sm="10" md="4" lg="2" xl="2" className="text-center">
            <h2 className="foot-head">Connecting</h2>
          </Col>
          <Col xs="10" sm="10" md="4" lg="2" xl="2" className="text-center">
            <h2 className="foot-head">Empowering</h2>
          </Col>
          <Col md={2} lg={2} xl={3}></Col>
        </Row>
        <Row className="justify-content-md-center">
          <div className="pic-container">
            <img
              className="pic"
              src="https://apothekergroup.com/wp-content/uploads/2018/09/placeholder.png"
              alt=""
            />
          </div>
          <div className="pic-container">
            <img
              className="pic"
              src="https://apothekergroup.com/wp-content/uploads/2018/09/placeholder.png"
              alt=""
            />
          </div>
          <div className="pic-container">
            <img
              className="pic"
              src="https://res.cloudinary.com/dyaffqyuj/image/upload/v1557954804/YMIM/6a00d83451b26169e201a5118cd1e9970c-800wi.jpg"
              alt=""
            />
          </div>
          <div className="pic-container">
            <img
              className="pic"
              src="https://apothekergroup.com/wp-content/uploads/2018/09/placeholder.png"
              alt=""
            />
          </div>
        </Row>
      </Container>
    );
  }
}

export default LowerMid;
