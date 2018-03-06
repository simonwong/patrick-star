import React, { Component } from 'react'
import { Spin, Icon } from 'antd'

import style from './style.scss'

class Loading extends Component {
    constructor(props) {
        super(props);
        
        
    }
    
    render() {
        const loadingIcon = <Icon type='loading' style={{ fontSize: 24 }} spin />

        return (
            <div className={style.container}>
                <Spin />
            </div>
        )
    }
}

export default Loading
