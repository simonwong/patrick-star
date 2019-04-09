import React from 'react'
import { Icon } from 'antd'

import styles from './index.scss'

const IconText = ({ type, text }) => (
    <span className={styles.container}>
        <Icon type={type} style={{ marginRight: 4 }} />
        { text }
    </span>
)

export default IconText
