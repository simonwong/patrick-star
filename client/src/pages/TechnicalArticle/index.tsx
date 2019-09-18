import React, { useState, useEffect } from 'react'
import styles from './index.scss'

export interface IArticleItem {
    id: string
    date: string
    title: string
}

const TechnicalArticle: React.FC = () => {
    const [list, setListData] = useState<IArticleItem[]>([])

    useEffect(() => {
        setListData([
            { id: '234', date: '2019.06.07', title: '文章文章文章文adsfd章' },
            { id: '234234', date: '2019.06.06', title: '文章2文章3文章3文章3' },
            { id: '234435', date: '2019.06.05', title: '文章3文章45文章45文章35' },
        ])
    }, [])

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {
                    list.map((item: IArticleItem) => (
                        <li key={item.id}>
                            <span className={styles.publishDate}>{ item.date }</span>
                            <h3 className={styles.title}>{ item.title }</h3>
                        </li>
                    ))
                }
            </ul>
            <div className={styles.placeholder} />
        </div>
    )
}

export default TechnicalArticle
