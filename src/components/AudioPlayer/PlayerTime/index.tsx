import * as React from 'react'
import styles from './PlayerTime.scss'

function PlayerTime() {

  console.log(styles);
  
  return (
    <div>
      <span className={styles.a}>current time</span>
      <input type="range" />
      <span>total time</span>
    </div>
  )
}

export default PlayerTime
