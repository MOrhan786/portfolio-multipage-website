import React from 'react'
import styles from './Portfolio.module.css'
import { caveatFont, interFont } from '@/font'
import PortfolioCard from '@/components/portfolio-cards/PortfolioCards'

function Portfolio() {
  return (
    <>
      <section id='portfolio' className={styles.portfolio}>
        <h1 className={`${caveatFont.className}`}>
          <span>M</span>y {" "}
          <span>L</span>ast {" "} 
          <span>W</span>ork
        </h1>

        <p className={interFont.className}>A collection of my recent projects — from e-commerce platforms to admin dashboards,
          <br />blog websites, and more. Each project reflects my passion for clean code and great UI.
        </p>

        <div className={styles.myWork}>
          <PortfolioCard/>
        </div>
      </section>
    </>
  )
}

export default Portfolio;