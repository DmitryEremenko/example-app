export const GET_USER = "GET_USER";
export const GET_USER_LIST = "GET_USER_LIST";
export const GET_USER_LIST_SUCCESSFUL = "GET_USER_LIST_SUCCESSFUL";
export const GET_USER_SUCCESSFUL = "GET_USER_SUCCESSFUL";


  export const getUser = payload => ({
    type: GET_USER,
    payload
  });
  export const getUsers = payload => ({
    type: GET_USER_LIST,
    payload
});

  export const getUserSuccessful = payload => ({
    type: GET_USER_SUCCESSFUL,
    payload
  });
  export const getUsersSuccessful = payload => ({
    type: GET_USER_LIST_SUCCESSFUL,
    payload
});