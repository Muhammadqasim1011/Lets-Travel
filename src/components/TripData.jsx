import React, { Component } from 'react'
import "./Trip.css";

export class TripData extends Component {
  render() {

  return (
   <div className="t-card">
    <div className="t-image">
        <img src={this.props.image} alt="" />
    </div>
    <h4>{this.props.heading}</h4>
    <p>{this.props.text}</p>
   </div>
  )
}

// TripData.propTypes = {
//     image: PropTypes.string.isRequired,
//     heading: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//   };
}
export default TripData;
