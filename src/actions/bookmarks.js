import uuid from 'uuid';
import { firebase } from '../firebase/firebase';
import  database  from '../firebase/firebase';

export const createBookmark = (bookmark) => ({
  type: 'CREATE_BOOKMARK',
  bookmark
});

export const startCreateBookmark = (bookmarkData = {}) => {
    return (dispatch) => {
     const {
         title = '',
         description = '',
         url = '',
         photo = '',
         category = '',
     } = bookmarkData;
     const bookmark = { title, description, url, photo, category };

     return database.ref('bookmarks').push(bookmark).then((ref) => {
         dispatch(createBookmark({
             id: ref.key,
             ...bookmark
         }));
     })
    };
  };