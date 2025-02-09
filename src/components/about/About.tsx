"use client";
import React from "react";
import styles from "./About.module.css";
import { caveatFont, interFont } from "@/font";
import Button from "../button/Button";
import Image from "next/image";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <>
      <section id="about" className={styles.about}>
        <motion.div
          className={styles.aboutLeftDiv}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <h1 className={caveatFont.className}>Mrs Asif</h1>
          <p className={caveatFont.className}>Freelance Web Developer</p>
          <p className={`${styles.detailsText} ${interFont.className}`}>
            As a frontend developer, I focus on appealing and user-friendly
            interfaces that enhance websites and applications. My expertise lies
            in building responsive crafting visually designs, ensuring a smooth
            and consistent experience across all devices. I have strong skills
            in HTML, CSS, and JavaScript, along with experience working with
            frameworks like Next.js and Tailwind CSS.
          </p>
          <Button text={"Contact Me"} />
        </motion.div>

        <motion.div
          className={styles.aboutRightDiv}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <Image
            src={"/image/profile.jpg"}
            alt={"profile picture"}
            width={400}
            height={400}
            className={styles.img}
          ></Image>
        </motion.div>
      </section>
    </>
  );
}

export default AboutSection;
