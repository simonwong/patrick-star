import React from 'react'

import style from './index.scss'

const ListTitle = ({ title="", }) => (
    <div className={style.container}>
        { title }
    </div>
)

export default ListTitle
