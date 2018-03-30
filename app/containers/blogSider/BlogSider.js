import React, { Component } from 'react'

import BlogSiderBlok from '../blogSiderBlok/BlogSiderBlok.js'
import BlogHotTag from '../blogHotTag/BlogHotTag.js'
import style from './blogSider.scss'

class BlogSider extends Component {
    constructor(props) {
        super(props);
        
    }
    

    render() {
        return (
            <div className={style.container}>
                <BlogSiderBlok
                    title="热门标签"
                >
                    <BlogHotTag />
                </BlogSiderBlok>
            </div>
        )
    }
}

export default BlogSider
