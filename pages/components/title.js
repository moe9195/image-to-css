import React from 'react'
import Link from '@material-ui/core/Link'
import styles from "../../styles/Home.module.css";

const Title = () => {
  return (
    <div className={styles.description}>
      Turn any image into pure CSS. Inspired by 
      <Link href="https://codepen.io/jaysalvat/pen/HaqBf" target="_blank">
        {" jaysalvat"}
      </Link>
   </div>
  )
}


export default Title;