import React, { Component } from "react";
import { connect } from "react-redux";
import { events } from "../../actions";
import EventForm from "./event_form";
import "./index.css";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {}
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

  render() {
    return (
      <div>
        <h1>Current Events</h1>
        <div className = "col-md-6">
          <EventForm event={this.state.event} />
          </div>
        <div className="row">
          {this.props.events.map((event, id) => (
            <div className="event_container col-md-3" key={`event_${event.id}`}>
              <h3>{event.name.text}</h3>
              
              <p>{event.description.text}</p>
             <div>
              <img src={
                event.logo
                ? event.logo.url
                : "https://placehold.it/300x300"
              }></img>

             </div>
              <button
                className="btn btn-info"
                onClick={() => this.selectForEdit(id)}
              >
                Edit
              </button>
              <button
                onClick={() => this.props.deleteEvent(id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          ))}
         
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