import React, { Component } from 'react'

import BlogHeader from '../blogHeader/BlogHeader'
import BlogContent from '../blogContent/BlogContent'
import style from './blog.scss'

class Blog extends Component {
    render() {
        return (
            <div className={style.container}>
                <BlogHeader />
                <div className={style.centerContainer}>
                    <BlogContent />
                    <sider>sider</sider>
                </div>
                <footer>footer</footer>
            </div>
        )
    }
}

export default Blog
