import * as React from 'react'
import styles from './index.module.scss'

interface State {
  count: number
}
interface Props {
}

class AboutPage extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  componentDidMount() {
    // do nothing.
  }
  render() {
    return (
      <div className={styles.aboutPage}>
      </div>
    )
  }
}

export default AboutPage