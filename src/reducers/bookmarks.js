const bookmarksReducerDefaultState = [];

export default (state = bookmarksReducerDefaultState, action) => {
  switch (action.type) {
    case 'CREATE_BOOKMARK':
      return [
        ...state,
        action.bookmark
      ];
    case 'REMOVE_BOOKMARK':
      return state.filter(({ id }) => id !== action.id);
    case 'UPDATE_BOOKMARK':
      return state.map((bookmark) => {
        if (bookmark.id === action.id) {
          return {
            ...bookmark,
            ...action.updates
          };
        } else {
          return bookmark;
        };
      });
    case 'SET_BOOKMARKS':
      return action.bookmarks;
    default:
      return state;
  }
};
