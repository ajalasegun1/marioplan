import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

function SignedInLinks(props) {
  const { initials } = props;
  return (
    <div>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={props.signout}>
            Logout
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn-floating center yellow darken-3">
            {initials}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
