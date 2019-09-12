import React, { Component } from "react";
import Markdown from "react-markdown";
import "./enroll.css";
import Text from "./enroll.md";
import "react-bootstrap";
import SingleCarousel from "../SingleCarousel";

class Enroll extends Component {
  constructor(props) {
    super(props);

    this.state = { text: null };
  }

  componentWillMount() {
    fetch(Text)
      .then(response => response.text())
      .then(text => {
        this.setState({ text: text });
      });
  }

  render() {
    return (
      <div>
        <SingleCarousel />
        <div className="container group">
          <h1 className="mt-5">Enroll</h1>
          <div className="mt-5">
            <Markdown id="fontcss" className="mt-3 " source={this.state.text} />
          </div>
          <div className="my-5">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScH_lkw44ikfkHlHpUFVsAtXF6MzElK19xWUyVOP_mJ-ClmHw/viewform?embedded=true" 
          width="100%" height="1209" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">
            Loading…
          </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Enroll;
