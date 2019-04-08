import React, { Component } from 'react'
import { List, Avatar, Icon } from 'antd'

import IconText from '../IconText'
import TitleTag from '../TitleTag'
import style from './index.scss'

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

    enterDetail(articleId) {
        console.log(articleId)
    }
    
    render() {
        return (
            <ul className={style.list}>
                {
                    this.props.articleList.map(item => (
                        <li
                            className={style.item}
                            key={item._id}
                        >
                            <div className={style.meta}>
                                <TitleTag
                                    tags={item.tags}
                                />
                                <h4
                                    className={style.title}
                                    onClick={() => {this.enterDetail(item.id)}}
                                >{item.title}</h4>
                            </div>
                            <div className={style.msg}>
                                <IconText type="user" text={item.author} />
                                <IconText type="calendar" text={item.date} />
                                <IconText type="eye-o" text={item.viewCount} />
                                <IconText type="message" text={item.commentCount} />
                            </div>
                            <div className={style.des}>
                                { item.body }
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default ArticleList
