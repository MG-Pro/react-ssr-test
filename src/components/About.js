import React from "react";
import {connect} from 'react-redux';

const About = (props) => {
  return (
    <div>
      About <p>{`${props.loggedIn}`}</p>
    </div>
  )
};

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});



export default connect(mapStateToProps)(About);

