import uuid from 'uuid';
import  database  from '../firebase/firebase';

// ADD BOOKMARK

export const createBookmark = (bookmark) => ({
  type: 'CREATE_BOOKMARK',
  bookmark
});

export const startCreateBookmark = (bookmarkData = {}) => {
    return (dispatch, getState) => {
     const uid = getState().auth.uid;
     const {
         title = '',
         description = '',
         url = '',
         photo = '',
         category = '',
     } = bookmarkData;
     const bookmark = { title, description, url, photo, category };

     return database.ref(`users/${uid}/bookmarks`).push(bookmark).then((ref) => {
         dispatch(createBookmark({
             id: ref.key,
             ...bookmark
         }));
     })
    };
  };

  // REMOVE BOOKMARK

  export const removeBookmark = ({ id } = {}) => ({
    type: 'REMOVE_BOOKMARK',
    id
  });
  
  export const startRemoveBookmark = ({ id } = {}) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/bookmarks/${id}`).remove().then(() => {
        dispatch(removeBookmark({ id }));
      });
    };
  };

  // Update BOOKMARK

  export const editBookmark = (id, updates) => ({
    type: 'UPDATE_BOOKMARK',
    id,
    updates
  });
  
  export const startUpdateExpense = (id, updates) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/bookmarks/${id}`).update(updates).then(() => {
        dispatch(updateBookmark(id, updates));
      });
    };
  };

  // SET BOOKMARKS

  export const setBookmarks = (bookmarks) => ({
    type: 'SET_BOOKMARKS',
    bookmarks
  });
  
  export const startSetBookmarks = () => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/bookmarks`).once('value').then((snapshot) => {
        const bookmarks = [];
  
        snapshot.forEach((childSnapshot) => {
          bookmarks.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setBookmarks(bookmarks));
      });
    };
  };

