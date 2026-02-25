import React from 'react'
import styles from './Footer.module.css'
import { caveatFont } from '@/font'
import { FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <h1 className={caveatFont.className}>© 2025 Mrs Asif. All rights reserved.</h1>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/razia-fatima-041290329/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com/MOrhan786" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://www.youtube.com/@MrsAsif-g3i" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
