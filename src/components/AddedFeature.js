import React from 'react';

import { connect } from "react-redux";
import { removeFeature } from "../actions/removeFeature";

const AddedFeature = props => {

  return (
    <li>
      <button className="button" onClick={() => {
      props.removeFeature(props.feature)}}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
