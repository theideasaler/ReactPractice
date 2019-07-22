import React from 'react';
import List from './listComponent.jsx';
import Form from './formComponent.jsx';
import Post from './post.jsx';

export default class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                    <h1>React & Redux</h1>
                    <List />
                </div>
                <div className="col-md-4 offset-md-1">
                    <h1>Add New Item</h1>
                    <Form />
                </div>
                <div className="col-md-4 offset-md-1">
                    <h1>Async Posts</h1>
                    <Post />
                </div>
            </div>
        );
    }
}
