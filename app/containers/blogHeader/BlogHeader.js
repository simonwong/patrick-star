import React, { Component } from 'react'

import style from './blogHeader.scss'

const menuItems = [
    { title: '首页', key: 'index', },
    { title: '前端笔记', key: 'front', },
    { title: '生活随笔', key: 'life', },
    { title: '关于我', key: 'about', },
]

class BlogHeader extends Component {
    constructor(props) {
        super(props);

        // TODO: redux
        this.state = {
            activeItem: 'index'
        }
        this.onHandleClick = this.onHandleClick.bind(this)
    }

    onHandleClick(key) {
        this.setState({
            activeItem: key
        })
    }

    render() {
        return (
            <header className={style.container}>
                <h1 className={style.webMark}>王思杰的个人网站</h1>
                <ul className={style.menuWrap}>
                    {
                        menuItems.map(item => (
                            <li
                                className={`${style.menuItem} ${
                                    item.key === this.state.activeItem ?
                                        style.active : ""}`
                                }
                                onClick={() => { this.onHandleClick(item.key) }}
                                key={item.key}
                            >
                                { item.title }
                            </li>
                        ))
                    }
                </ul>
            </header>
        )
    }
}

export default BlogHeader
