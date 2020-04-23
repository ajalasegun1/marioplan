import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

function Navbar(props) {
  const { auth, initials } = props;
  const links = auth.uid ? (
    <SignedInLinks initials={initials} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <div>
      <nav className="teal">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            MarioPlan
          </Link>
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          {links}
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    initials: state.firebase.profile.initials,
  };
};
export default connect(mapStateToProps)(Navbar);
