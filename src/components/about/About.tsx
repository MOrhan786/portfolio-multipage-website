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
          <p className={caveatFont.className}>Full-Stack Software Engineer</p>
          <p className={`${styles.detailsText} ${interFont.className}`}>
            I am a Full-Stack Software Engineer with hands-on experience building
            scalable web applications, REST APIs, and AI-powered systems. I specialize
            in Next.js, React, FastAPI, and Node.js on the frontend and backend, with
            strong DevOps skills in Docker, Kubernetes, and CI/CD pipelines. I also work
            with LLM integrations and RAG systems, and I am passionate about clean
            architecture, system design, and delivering real-world impact through technology.
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
