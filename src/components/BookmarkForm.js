import React from 'react'
import { connect } from 'react-redux';
import { startCreateBookmark } from '../actions/bookmarks';

export class BookmarkForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        title: props.bookmark ? props.bookmark.title : '',
        description: props.bookmark ? props.bookmark.description : '',
        url: props.bookmark ? props.bookmark.url : '',
        photo: props.bookmark ? props.bookmark.photo: '',
        category: props.bookmark ? props.bookmark.bookmark: '',
        error: ''
      };
    }
    onTitleChange = (e) => {
      const title = e.target.value;
      this.setState(() => ({ title }));
    };
    onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({ description }));
    };
    onUrlChange = (e) => {
      const url = e.target.value;
      this.setState(() => ({ url }));
    };
    // onPhotoChange = (e) => {
    //   const photo = e.target.value;
    //   this.setState(() => ({ photo }));
    // };
    onCategoryChange = (e) => {
      const category = e.target.value;
      this.setState(() => ({ category }));
    };
    onSubmit = (e) => {
      e.preventDefault();
  
      if (!this.state.title || !this.state.url || !this.state.category) {
        this.setState(() => ({ error: 'Please provide title, url, and category.' }));
      } else {
        this.setState(() => ({ error: '' }));
        this.props.startCreateBookmark({
          title: this.state.title,
          description: this.state.description,
          url: this.state.url,
          photo: this.state.photo,
          category: this.state.category
        });
      }
    };
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
          <input
              type="text"
              placeholder="Title"
              autoFocus
              value={this.state.title}
              onChange={this.onTitleChange}
            />
            <input
              type="text"
              placeholder="Url"
              value={this.state.url}
              onChange={this.onUrlChange}
            />
            <input
              type="text"
              placeholder="Category"
              value={this.state.category}
              onChange={this.onCategoryChange}
            />
            <input
              type="text"
              placeholder="Description"
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
            <button>Add Bookmark</button>
          </form>
        </div>
      )
    }
  }

  const mapDispatchToProps = (dispatch, props) => ({
    startCreateBookmark: (bookmark) => dispatch(startCreateBookmark(bookmark))
  });

  export default connect(undefined, mapDispatchToProps)(BookmarkForm);