import * as React from 'react'
import classname from 'classnames'
import { hot } from 'react-hot-loader/root'

import Slide from '@material-ui/core/Slide'
import MenuBar from '@/components/MenuBar'
import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'

import styles from './BasicLayout.scss'

const BasicLayout: React.SFC = ({ children }) => {
    const [showMenu, setShowMenuState] = React.useState(true)
    const handleToggleShowMenu = () => {
        setShowMenuState(!showMenu)
    }

    const [currentMenu, setCurrentMenuState] = React.useState('article')
    const handleChangeMenu = (item) => {
        setCurrentMenuState(item.key)
    }

    return (
        <div className={styles.wrapper}>
            <GlobalHeader
                onClickStart={handleToggleShowMenu}
            />
            <div className={styles.layout}>
                <Slide
                    direction="right"
                    in={showMenu}
                >
                    <div className={classname(styles.side, showMenu ? '' : styles.sideHide)}>
                        <MenuBar
                            menu={
                                [
                                    {
                                        name: '技术文章',
                                        path: '',
                                        key: 'article',
                                        icon: 'article',
                                    },
                                    {
                                        name: '记录生活',
                                        path: '',
                                        key: 'life',
                                        icon: 'life',
                                    },
                                    {
                                        name: '关于我',
                                        path: '',
                                        key: 'about',
                                        icon: 'about',
                                    },
                                ]
                            }
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
export default hot(BasicLayout)
