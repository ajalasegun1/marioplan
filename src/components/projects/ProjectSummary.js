import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import firebase from "../../config/fbConfig"

function ProjectSummary({ project }) {

  const deleteProject = (id) => {
    console.log("this is my story", id)
    let db = firebase.firestore()
    db.collection('projects').doc(id).delete().then(() => {
      console.log("project deleted")
    }).catch((error)=> {
      console.log(error)
    })
  }
  
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <Link to={"/project/" + project.id}>
            <span className="card-title">{project.title}</span>
          </Link>
          <p>{project.content}</p>
          <br />
          <p>
            Created by: {project.authorFirstName} {project.authorLastName}
          </p>
          <p>{moment(project.createdAt.toDate()).calendar()}</p>
          <br />
          <div>
            <Link to={"/edit/"+ project.id}>
              <button className="btn teal">
                <i className="material-icons">edit</i>
              </button>
            </Link>

            <button className="btn red" onClick={() => deleteProject(project.id)}>
              <i className="material-icons">delete</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSummary;
