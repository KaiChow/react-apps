import { FUNC_RIGHTS } from "../actions";

const initState = {
  rights: 0,
};

const rightsReducer = (state = initState, action) => {
  let payload = action.payload;
  switch (action.type) {
    case FUNC_RIGHTS:
      state.rights = payload;
      return {
        ...state,
        rights: state.rights,
      };
    default:
      return state;
  }
};

export default rightsReducer;
