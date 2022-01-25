import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import styles from "../../styles/Home.module.css";

const links = [
  {
    label: '©2021',
    src: ''
  },
  {
    label: '@moerahmeh95',
    src: 'https://mrahmeh.netlify.app/'
  },
  {
    label: 'github',
    src: 'https://github.com/moe9195'
  },
]

const Footer = () => {

  return (
    <div className={styles.footer}>
      {links.map((link) => (
        <Typography className={styles.linkTypography} key={link.label}>
          <Link className={styles.link} href={link.src} target="_blank">
            {link.label}
          </Link>
        </Typography>
        )
      )}
   </div>
  )
}


export default Footer;