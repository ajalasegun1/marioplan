const initState = {
  projects: [
    {
      id: "1",
      title: "Luffy",
      content:
        "Mugiwara chase is the new game that came out on playstation 4 this year",
    },
    {
      id: "2",
      title: "Zoro",
      content:
        "Roronora Zoro is now a one eyed three swords wielding samurai in the game",
    },
    {
      id: "3",
      title: "Sanji",
      content:
        "Turn out he is the son of a noble who made big mum's daughter love him",
    },
  ],
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERR":
      console.log(action.err);
      return state;
    case "EDIT_PROJECT_SUCCESS":
      console.log("Project updated");
      return state
    case "EDIT_PROJECT_ERR":
      console.log("Edit Project error", action.err)
      return state
    default:
      return state;
  }
};

export default projectReducer;
