import React, { Component } from 'react'

import ListTitle from 'Components/ListTitle'
import ArticleList from 'Components/ArticleList'
import style from './index.scss'

class BlogContent extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className={style.container}>
                <ListTitle
                    title="最新文章"
                />
                <ArticleList articleList={this.props.articleList}/>
            </div>
        )
    }
}

export default BlogContent
