import * as React from 'react'

import CustomIcon from '@/components/CustomIcon'

import styles from './index.scss'

// export interface IFooterProps {

// }

const GlobalFooter: React.SFC = () => (
    <footer className={styles.footer}>
        <div className={styles.connact}>
            <CustomIcon
                className={styles.connactIcon}
                type="github"
            />
            <span>
                <a
                    href="https://github.com/simonjayw"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github.com/simonjayw
                </a>
            </span>
        </div>
        <div className={styles.connact}>
            <CustomIcon
                className={styles.connactIcon}
                type="email"
            />
            <span>wsj_simon@163.com</span>
        </div>
        <div className={styles.connact}>
            <CustomIcon
                className={styles.connactIcon}
                type="copyright"
            />
            <span>2016-2019 王思杰</span>
        </div>
    </footer>
)

// GlobalFooter.defaultProps = {
// }

export default GlobalFooter
