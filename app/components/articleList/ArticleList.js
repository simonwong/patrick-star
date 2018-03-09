import React, { Component } from 'react'
import { List, Avatar, Icon } from 'antd'

import IconText from '../iconText/IconText'
import style from './articleList.scss'

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    author: 'Simon Jay',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    viewNum: 199,
    commentNum: 66,
    publicDate: '2018/12/12',
    tag: "前端笔记"
  });
}

// const pagination = {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
//     pageSize: 10,
//     current: 1,
//     total: listData.length,
//     onChange: (() => {}),
// };

class ArticleList extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <ul className={style.list}>
                {
                    listData.map(item => (
                        <li className={style.item}>
                            <div className={style.meta}>
                                { item.tag }
                                <h4 className={style.title}>{item.title}</h4>
                            </div>
                            <div className={style.msg}>
                                <IconText type="user" text={item.author} />
                                <IconText type="calendar" text={item.publicDate} />
                                <IconText type="eye-o" text={item.viewNum} />
                                <IconText type="message" text={item.commentNum} />
                            </div>
                            <div className={style.des}>
                                { item.content }
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default ArticleList
