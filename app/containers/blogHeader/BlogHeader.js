import React, { Component } from 'react'
import { Menu } from 'antd'

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

    }

    render() {
        return (
            <header className={style.container}>
                <h1 className={style.webMark}>王思杰的个人网站</h1>
                <Menu
                    className={style.menuWrap}
                    mode='horizontal'
                    style={{
                        borderBottom: 'none'
                    }}
                >
                    {
                        menuItems.map(item => (
                            <Menu.Item key={item.key}>
                                { item.title }
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </header>
        )
    }
}

export default BlogHeader
