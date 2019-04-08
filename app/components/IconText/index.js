import React from 'react'
import { Icon } from 'antd'

const IconText = ({ type, text }) => (
    <span style={{ marginRight: 10 }}>
        <Icon type={type} style={{ marginRight: 4 }} />
        { text }
    </span>
)

export default IconText
