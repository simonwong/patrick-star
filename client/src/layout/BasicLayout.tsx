import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'dva'
import { hot } from 'react-hot-loader/root'
import classname from 'classnames'

import Slide from '@material-ui/core/Slide'
import MenuBar from '@/components/MenuBar'
import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'

import { IRouterConfig } from '@/router'

import styles from './BasicLayout.scss'

export interface IBasicProps {
    routerData?: Array<IRouterConfig>,
    dispatch: Dispatch,
    collapsed: boolean,
    currentMenu: string,
}
const BasicLayout: React.FC<IBasicProps> = ({
    children,
    routerData = [],
    dispatch,
    collapsed,
    currentMenu,
}) => {
    const handleToggleShowMenu = () => {
        dispatch({
            type: 'menu/changeLayoutCollapsed',
        })
    }
    const handleChangeMenu = (item) => {
        dispatch({
            type: 'menu/changeMenu',
            payload: item.path,
        })
    }

    return (
        <div className={styles.wrapper}>
            <GlobalHeader
                onClickStart={handleToggleShowMenu}
            />
            <div className={styles.layout}>
                <Slide
                    direction="right"
                    in={collapsed}
                >
                    <div className={classname(styles.side, collapsed ? '' : styles.sideHide)}>
                        <MenuBar
                            menu={routerData}
                            current={currentMenu}
                            onChange={handleChangeMenu}
                        />
                        <GlobalFooter />
                    </div>
                </Slide>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default hot(
    connect(({ menu }) => ({
        collapsed: menu.collapsed,
        currentMenu: menu.currentMenu,
    }))(BasicLayout),
)
