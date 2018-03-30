import React, { Component } from 'react'

import BlogHeader from '../blogHeader/BlogHeader'
import BlogContent from '../blogContent/BlogContent'
import BlogSider from '../blogSider/BlogSider'
import BlogFooter from '../blogFooter/BlogFooter'
import style from './blog.scss'

class Blog extends Component {
    render() {
        return (
            <div className={style.container}>
                <BlogHeader />
                <div className={style.centerContainer}>
                    <BlogContent />
                    <BlogSider />
                </div>
                <BlogFooter />
            </div>
        )
    }
}

export default Blog
