import React, { Component } from "react";
import { connect } from "react-redux";
import { editProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import firebase from "../../config/fbConfig";

class EditProject extends Component {
  state = {
    title: "",
    content: "",
    id: "",
  };

  componentDidMount = () => {
    const id = this.props.match.params.edit_id;
    //console.log(id)
    const db = firebase.firestore();
    //console.log(db.collection('projects').doc(id))
    const res = db.collection("projects").doc(id);
    console.log(res);
    res
      .get()
      .then((resp) => {
        if (resp) {
          //console.log(resp.data().content);
          this.setState({
            title: resp.data().title,
            content: resp.data().content,
            id: id,
          });
        } else {
          console.log("You've got nothing here hommie!");
        }
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title !== "" || this.state.content !== "") {
      this.props.editProject(this.state);
    }
    setTimeout(() => {
      this.props.history.push("/");
    }, 1000);
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    const projects = this.props.project;
    if (projects) {
      console.log(projects);
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col m12 frm ">
            <form onSubmit={this.handleSubmit}>
              <h5 className="center">Edit Project</h5>
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
                <button className="btn">Edit</button>
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
    editProject: (project) => dispatch(editProject(project)),
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
  };
};

export default compose(
  firestoreConnect([{ collection: "projects" }]),
  connect(mapStateToProps, mapDispatchToProps)
)(EditProject);
