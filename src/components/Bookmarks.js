import React from 'react';

export class Bookmarks extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getBookmarks();
    }

    render() {

        const bookmarks = this.props.bookmarks.map((el, i) => {
            <li>{el.title}</li>
        });

        return (
            <ul>{bookmarks}</ul>
        );
    }
};