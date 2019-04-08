import React, { Component } from 'react'
import { Spin, Icon } from 'antd'

import style from './loading.scss'

const loadingIcon = <Icon type='loading' style={{ fontSize: 24 }} spin />

const Loading = () => (
    <div className={style.container}>
        <Spin size='large' indicator={loadingIcon} />
    </div>
)

export default Loading
