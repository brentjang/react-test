import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://django-back-env.eba-rvtzrcn7.us-west-2.elasticbeanstalk.com/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                })
            })
        
    }

    render() {
        return (
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>
            </Card>
        )
    }
}

export default ArticleDetail;