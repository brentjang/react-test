import React from 'react';
import axios from 'axios';

import Articles from '../components/Article';

class ArticleList extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('https://django-back-env.eba-rvtzrcn7.us-west-2.elasticbeanstalk.com')
            .then(res => {
                this.setState({
                    articles: res.data
                })
            })
    }

    render() {
        return (
            <Articles data={this.state.articles} />
        )
    }
}

export default ArticleList;