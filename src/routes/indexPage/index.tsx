import * as React from 'react'
import { Button } from 'antd-mobile'
import styles from './index.module.scss'

function IndexPage() {
  return (
    <div className={styles.indexPage}>
      <Button>Start</Button>
    </div>
  )
}

export default IndexPage