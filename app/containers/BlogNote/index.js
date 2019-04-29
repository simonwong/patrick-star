import React, { Component } from 'react'

import BlogContent from 'Components/BlogContent'
import BlogSider from 'Components/BlogSider'

import styles from './index.scss'

class BlogFenote extends Component {
    componentDidMount() {
    }

    render () {
        return (
            <div className={styles.container}>
                <BlogContent articleList={[]}/>
                <BlogSider/>
            </div>
        )
    }
}

export default BlogFenote
