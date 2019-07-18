import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addArticle } from '../../redux/actions/index';

const mapDispatchToProps = dispatch => ({
    addArticle: article => dispatch(addArticle(article))
});

class ConnectedForm extends Component {
    constructor(){
        super();
        this.state = {
            title: ""
        };
    }

    handleChange = e => this.setState({
        [e.target.id]: e.target.value
    });

    handleSubmit = e => {
        e.preventDefault();
        const { title } = this.state;
        const id = uuid();
        this.props.addArticle({ title,id });
        this.setState({title: ""});
    };
}