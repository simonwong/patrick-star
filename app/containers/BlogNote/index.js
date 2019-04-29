import React, { Component } from 'react'

import BlogContent from 'Components/BlogContent'
import BlogSider from 'Components/BlogSider'

import { article } from '@/api'
import styles from './index.scss'

class BlogFenote extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        article.getList().then(res => {
            if (res && res.success) {
                this.setState({
                    list: res.data.list,
                })
            }
        })
    }

    render () {
        const { list } = this.state
        return (
            <div className={styles.container}>
                <BlogContent articleList={list} />
                <BlogSider />
            </div>
        )
    }
}

export default BlogFenote
