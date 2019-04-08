import React, { Component } from 'react'

import style from './index.scss'

const hotTags = ['React', 'Es6', 'Babel', 'Vue', 'Redux']

class BlogHotTag extends Component {
    constructor(props) {
        super(props);
        
    }
    
    selectTag(tag) {
        console.log(tag)
    }

    render() {
        return (
            <ul className={style.list}>
                {
                    hotTags.map(tag => (
                        <li
                            className={style.item}
                            key={tag}
                            onClick={() => {this.selectTag(tag)}}
                        >
                            {tag}
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default BlogHotTag
