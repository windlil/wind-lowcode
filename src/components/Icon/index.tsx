import { FC, ReactNode } from 'react'
import styles from './index.module.less'

const Icon: FC<{
  children: ReactNode
}> = ({ children }) => {
  return <span style={{width: 16, height: 16, marginRight: 8}} className={styles.Icon}>
    {children}
  </span>
}

export default Icon