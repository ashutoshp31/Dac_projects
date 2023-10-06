export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove after finishing developing
  // token:
  //   "BQBEaXWL9wx6442Ir7LP7iNXHSKv6VlsVVkSO9WPwzp6JKid4ED9HrxJYgNaTIaaAQWw5FlSkLHgQj9BYs9diAO9NNzI3MoAC__6G45gLgozkhSP2aZUYXxBR5Bh-HMdvC3k4k2sx8B1Ma99N7zS4s_Pw8atgi_g_xJjm3J7q_oiYBKkoVuqVLIYPcT8exK0kS1WG6mvPtedVyEQ",
};

const reducer = (state, action) => {
  console.log(action);

  //Action has type, [payload]

  switch (action.type) {
    //setting ther user
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };

    default:
      return state;
  }
};
export default reducer;
