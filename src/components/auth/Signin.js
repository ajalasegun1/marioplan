import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class Signin extends Component {
  state = {
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
    if (this.state.email !== "" || this.state.password !== "") {
      //console.log(this.state);
      this.props.signIn(this.state);
    }
    setTimeout(() => {
      this.props.history.push("/");
    }, 1500);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <div className="row">
          <div className="col m12 s12 frm ">
            <form onSubmit={this.handleSubmit}>
              <h5 className="center">Sign In</h5>
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
                <button className="btn">Sign In</button>
                <div className="red-text">
                  {authError ? <p>{authError}</p> : null}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToPros = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Signin);
