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

    render(){
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title (Illeagel words: Hot, July)</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        value={ title } 
                        onChange = { this.handleChange }                                              
                    />
                    <button className="btn btn-success btn-lg mt-3" type="submit">
                        SAVE
                    </button>
                </div>
            </form>
        );
    }
}

const Form = connect(null,mapDispatchToProps)(ConnectedForm);

export default Form;