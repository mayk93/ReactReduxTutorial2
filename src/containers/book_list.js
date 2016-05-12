/**
 * Created by Michael on 12/05/16.
 */

import React, { Component } from 'react';

export default class BookList extends Component {
    renderList()  {
        return this.props.books.map((book) => {
            return (
                <li key={ book.title } className="list-group-item">{ book.title } { book.details }</li>
                // <li key={ book.title } className="list-group-item">{ book.details }</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}