import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    if ([e.target.id] === "") {
      console.log("empty");
    }
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <div className="row">
          <div className="col m12 s12 frm ">
            <form onSubmit={this.handleSubmit}>
              <h5 className="center">Sign Up</h5>
              <div className="input-field">
                <input
                  id="firstName"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.firstName}
                />
                <label htmlFor="firstName">First Name</label>
              </div>

              <div className="input-field">
                <input
                  id="lastName"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.lastName}
                />
                <label htmlFor="text">LastName</label>
              </div>

              <div className="input-field">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field ">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="input-field center">
                <button className="btn">Sign Up</button>
              </div>
              <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (userData) => dispatch(signUp(userData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
