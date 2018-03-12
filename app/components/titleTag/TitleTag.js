import React from 'react'

import style from './titleTag.scss'

const TitleTag = ({ tag }) => {
    const tagArr = tag.split(',')

    return (
        <div className={style.container}>
            {
                tagArr.map((item, index) => (
                     <span
                        className={style.tag}
                        key={index}
                    >
                        { item }
                    </span>
                ))
            }
        </div>
    )
    
}

export default TitleTag
