import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const Title = ({ styles }) => {
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