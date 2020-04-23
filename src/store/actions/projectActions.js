export const createProject = (project) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    //You can make async calls here
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: userId,
        createdAt: new Date()
      })
      .then(() => {
        //Below you can dispatch an action.
        //This is more like creating the action object you normally would have created...
        dispatch({ type: "CREATE_PROJECT", project: project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERR", err });
      });
  };
};

export const editProject = (project) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    //You can make async calls here
    const firestore = getFirestore();

    firestore
      .collection("projects")
      .doc(project.id)
      .update({
        title: project.title,
        content: project.content,
      })
      .then(() => {
        //Below you can dispatch an action.
        //This is more like creating the action object you normally would have created...
        dispatch({ type: "EDIT_PROJECT_SUCCESS", project: project });
      })
      .catch((err) => {
        dispatch({ type: "EDIT_PROJECT_ERR", err });
      });
  };
};
