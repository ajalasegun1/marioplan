import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title !== "" || this.state.content !== "") {
      //console.log(this.state);
      this.props.createProject(this.state);
    }
    setTimeout(() => {
      this.props.history.push("/");
    }, 1000);
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <div className="row">
          <div className="col m12 frm ">
            <form onSubmit={this.handleSubmit}>
              <h5 className="center">Create New Project</h5>
              <div className="input-field">
                <input
                  id="title"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.title}
                />
                <label htmlFor="title">Title</label>
              </div>

              <div className="input-field ">
                <textarea
                  id="content"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                  value={this.state.content}
                ></textarea>
                <label htmlFor="content">Content</label>
              </div>

              <div className="input-field center">
                <button className="btn">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
