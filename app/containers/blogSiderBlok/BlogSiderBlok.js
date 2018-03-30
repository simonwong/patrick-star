import React, { Component } from 'react'

import style from './blogSiderBlok.scss'

class BlogSiderBlock extends Component {
    constructor(props) {
        super(props);
        
    }
    

    render() {
        const { title, children } = this.props

        return (
            <div className={style.container}>
                <span className={style.title}>{ title }</span>
                { children }
            </div>
        )
    }
}

export default BlogSiderBlock
