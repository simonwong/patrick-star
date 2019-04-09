import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import style from './index.scss'

const menuItems = [
    { title: '首页', key: 'home', },
    { title: '前端笔记', key: 'fenote', },
    { title: '生活随笔', key: 'essay', },
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
        // const { onChange } = this.props
        this.setState({
            activeItem: key
        })
        // onChange && onChange(key)
    }

    render() {
        return (
            <header className={style.container}>
                <div className={style.content}>
                    <h1 className={style.webMark}>王思杰的个人网站</h1>
                    <ul className={style.menuWrap}>
                        {
                            menuItems.map(item => (
                                <li
                                    className={style.menuItem}
                                    onClick={() => { this.onHandleClick(item.key) }}
                                    key={item.key}
                                >
                                    <NavLink
                                        to={`/${item.key}`}
                                        activeClassName={style.active}
                                    >
                                        { item.title }
                                    </NavLink>
                                </li>
                                
                            ))
                        }
                    </ul>
                </div>
            </header>
        )
    }
}

export default BlogHeader
