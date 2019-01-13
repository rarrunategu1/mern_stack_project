const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

export default function(state = initialState, action) {
  //will have a switch statement depending on action that is called
  switch (action.type) {
    default:
      return state;
  }
}
