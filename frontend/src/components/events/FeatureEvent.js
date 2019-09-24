import React, { Component } from "react";
import Moment from "react-moment";
import defaultLogo from "../../assets/ymim1.png";
import "./organisms/event_section.css";
import EventImage from "./atoms/image/image";
import Text from "./atoms/text/text";
import Flex from "./atoms/flex/flex";

class FeatureEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  displayToggle = text => {
    return (
      <div>
        {text}
        <span role="button" onClick={this.toggle} style={{ color: "red" }}>
          {" "}
          {this.state.isOpen ? "+ Show less" : " - Show more"}{" "}
        </span>
      </div>
    );
  };
  displayContent = text => {
    let maxChar = 140;
    if (this.state.isOpen) {
      return this.displayToggle(text);
    }
    return this.displayToggle(text.substring(0, maxChar + 1));
  };

  render() {
    const { event } = this.props;
    return (
      <div>
        <h2>Upcoming Events</h2>
        <Flex>
          <p>
            <EventImage
              url={event.url}
              image={event.logo.url ? event.logo.url : defaultLogo}
              type="floating"
            />
            < Text
            type = "subheading"
            text = {
              event.name.text
            }
            />
            <Text
              text={<Moment format="ll">{event.start}</Moment>}
              type="subheading"
            />
            <Text
              type="description"
              text={
                event.description.text
                  ? this.displayContent(event.description.text)
                  : ""
              }
            />
          </p>
          <p>
            <Text type="rsvp" text={"RSVP and Find out and more:"} />
          </p>
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className = "space-anchors"
            alt="Eventbrite"
          >
            <Text text={"Eventbrite"} />
          </a>
          <a
            href="https://www.facebook.com/theymim/"
            target="_blank"
            rel="noopener noreferrer"
            className = "space-anchors"
            alt="Facebook"
          >
            <Text text={"Facebook"} />
          </a>
        </Flex>
      </div>
    );
  }
}

export default FeatureEvent;