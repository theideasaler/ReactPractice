import React from 'react';
import List from './listComponent.jsx';
import Form from './formComponent.jsx';

export default class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                    <h1>Hello Neo</h1>
                    <List />
                </div>
                <div className="col-md-4 offset-md-1">
                    <h1>Add New Item</h1>
                    <Form />
                </div>
            </div>
        );
    }
}
