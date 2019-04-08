import React, { Component } from 'react'

import ArticleList from 'Components/ArticleList'
import style from './index.scss'

class BlogContent extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className={style.container}>
                <div className={style.title}>最新文章</div>
                <ArticleList articleList={this.props.articleList}/>
            </div>
        )
    }
}

export default BlogContent
