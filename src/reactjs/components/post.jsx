import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../redux/actions/index";

const mapDispatchToProps = dispatch => ({
    getData: () => {
        // console.log("getData() starts");
        Promise.resolve(getData())
        .then(response => {
            console.log(response);
            dispatch(response);
        })
        .catch(
            err => console.log(err)
        );
        // console.log("getData() ends");
    }
})

class ConnectedPost extends Component {
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.getData();
    }

    render(){
        return null;
    }
}

export default connect(null,mapDispatchToProps)(ConnectedPost);