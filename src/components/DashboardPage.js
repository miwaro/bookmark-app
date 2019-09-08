import React from 'react';
import BookmarkForm from './BookmarkForm';
import Bookmarks from './Bookmarks';
import { connect } from 'react-redux';
import { startCreateBookmark } from '../actions/bookmarks';


 class DashboardPage extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
        bookmarks: []
    };
  }

  onSubmit = (bookmark) => {
    this.props.startCreateBookmark(bookmark);
  };

  getBookmarks = () => {
    this.props.startSetBookmarks();
  }

  render() {
    return(
      <div>
        <BookmarkForm 
          onSubmit={this.props.onSubmit}/>
        <Bookmarks
          getBookmarks={this.props.getBookmarks}
          bookmarks={this.props.bookmarks}
          />       
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  startCreateBookmark: () => dispatch(startCreateBookmark()),
  startSetBookmarks: () => dispatch(startSetBookmarks())
});

const mapStateToProps = (state) => {
  const { bookmarks } = state;
  return { bookmarks };
}; 

//add map state to props
// make this component's bookmarks property (in the component state) match up with the redux bookmarks state

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);


