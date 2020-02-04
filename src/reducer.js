import {
  GET_USER,
  GET_USER_LIST,
  GET_USER_LIST_SUCCESSFUL,
  GET_USER_SUCCESSFUL
} from "./actions";

const defaultState = {
    user: {},
    usersList: []
}

export default function rootReducer (state = defaultState, action = {}){
    const {type, payload} = action;
    switch (type) {
      case GET_USER:
        return state;
      case GET_USER_LIST:
        return state;
      case GET_USER_LIST_SUCCESSFUL:
        return {
          ...state,
          usersList: payload
        };
      case GET_USER_SUCCESSFUL:
        console.log(payload);
        return {
          ...state,
          user: payload
        };
      default:
        return state;
    }

}