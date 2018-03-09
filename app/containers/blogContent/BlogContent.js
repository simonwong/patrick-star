import React, { Component } from 'react'

import ListTitle from '../../components/listTitle/ListTitle'
import ArticleList from '../../components/articleList/ArticleList'
import style from './blogContent.scss'

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
                <ArticleList/>
            </div>
        )
    }
}

export default BlogContent
