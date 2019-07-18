import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    articles: state.articles
});

const listComp = ({articles}) => (
    <ul className="list-group list-group-flush">
        {
            articles.map(
                article => (
                    <li className="list-group-item" key={article.id}>
                        {article.title}
                    </li>
                )   
            )
        }
    </ul>
);

const List = connect(mapStateToProps)(listComp);

export default List;