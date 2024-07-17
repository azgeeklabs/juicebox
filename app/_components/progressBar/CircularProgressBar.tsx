import React from 'react'
import styles from "./progressBar.module.css"

const CircularProgressBar = () => {
  return (
    <div className={`${styles.percent}`}>
        <svg>
            <circle cx={70} cy={70} r={20}></circle>
            <circle cx={70} cy={70} r={20}></circle>
        </svg>
    </div>
  )
}

export default CircularProgressBar