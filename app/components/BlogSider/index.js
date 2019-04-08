import React, { Component } from 'react'

import BlogHotTag from 'Components/BlogHotTag'
import style from './index.scss'

const BlogSider = () => (
    <div className={style.container}>
        <div className={style.block}>
            <span className={style.title}>热门标签</span>
            <BlogHotTag />
        </div>
    </div>
)

export default BlogSider
