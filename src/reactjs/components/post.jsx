import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, getDataAsync, getDataSaga } from "../../redux/actions/index";

// const mapDispatchToProps = dispatch => ({
//     getData: () => {
//         // console.log("getData() starts");
//         Promise.resolve(getData())
//         .then(response => {
//             console.log(response);
//             dispatch(response);
//         })
//         .catch(
//             err => console.log(err)
//         );
//         // console.log("getData() ends");
//     }
// })

const mapDispatchToProps = dispatch => ({
    getDataSaga: () => dispatch(getDataSaga())
});

class ConnectedPost extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getDataSaga();
    }

    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.articles.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    articles: state.remoteArticles.slice(0, 10)
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedPost);