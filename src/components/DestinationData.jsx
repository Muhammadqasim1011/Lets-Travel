import React, { Component } from "react";
import "./Destination.css";
import PropTypes from 'prop-types';


class DestinationData extends Component {
  render() {
    return (
        <div className={this.props.className}>
          <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>
              {this.props.text}
            </p>
          </div>
          <div className="image">
            <img src={this.props.img1} alt="Kumrat Valley" />
            <img src={this.props.img2} alt="Kumrat Valley" />
          </div>
        </div>
    );
  }
}

DestinationData.propTypes = {
  className: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
};
export default DestinationData;