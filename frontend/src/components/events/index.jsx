import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Col,
  Row
} from "react-bootstrap";
import { events } from "../../actions";
import Blurb from "./blurb_event";
import "./index.css";
import logo from "../../assets/logo.png";
import { EventItems } from "./event_card";



import "./index.css";
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
      isHidden: false
    };
  }

  componentDidMount() {
    this.props.fetchEvents();

  }
  selectForEdit = id => {
    let edit_event = this.props.events[id];
    this.setState({
      event: edit_event
    });
  };

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }




  render() {
    return (
      <div>
        <Blurb />
       <div className="eventsDisplay">
        <Container>
          <Row>
            
       
            {this.props.events.map(event => {
              
              return (
              
               <Col>
                <EventItems
                  key={event.id}
                  name={
                    event.name
                      ? event.name.text
                      : "Young Masterbuilders In Motion Event"
                  }
                  description={
                    event.description
                      ? event.description.text
                      : ""
                  }
                  start={
                    event.start
                      ? event.start.local
                      : "TBA"
                  }
                  end={
                    event.end
                      ? event.end.local
                      : "TBA"
                  }
                  logo={
                    event.logo
                      ? event.logo.url
                      : logo
                  }
                />
                </Col>
              )

            })}
         
          
          
          </Row>
          </Container> 
        </div> 
       
        
        </div>
    


     
    );
  }
}
const mapStateToProps = state => {
  return {
    events: state.events
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => {
      dispatch(events.fetchEvents());
    },
    deleteEvent: id => {
      dispatch(events.deleteEvent(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);