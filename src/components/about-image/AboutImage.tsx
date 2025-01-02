'use client'
import React from 'react'
import styles from './AboutImage.module.css'
import Image from 'next/image'
import {motion} from "framer-motion"

// parent
const containerVariants = {
  hidden:{},
  show: {
    transition: {
     staggerChildren: 0.2
    }
  }
}

// child
const itemVariants = {
  hidden:{opacity: 0, y: 20},
  show:{opacity: 1, y: 0}
}


function AboutImage() {
  return (
    <>
      <motion.section className={styles.aboutBottomImage}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        <motion.div variants={itemVariants}><Image src={"/image/html.png"} alt={"html picture"} width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVariants}><Image src={"/image/css.png"} alt={"html picture"} width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVariants}><Image src={"/image/typescript.png"} alt={"html picture"} width={70} height={70}></Image></motion.div>
        <motion.div variants={itemVariants}><Image src={"/image/git.png"} alt={"html picture"} width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVariants}><Image src={"/image/figma.png"} alt={"html picture"} width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVariants}><Image src={"/image/react.png"} alt={"html picture"} width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVariants}><Image src={"/image/node.png"} alt={"html picture"} width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVariants}><Image src={"/image/next.png"} alt={"html picture"} width={96} height={96}></Image></motion.div>
      </motion.section>
    </>
  )
}

export default AboutImage