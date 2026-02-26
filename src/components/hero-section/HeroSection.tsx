import React from 'react'
import styles from './HeroSection.module.css'
import { interFont } from '@/font';
import Button from '../button/Button';
import { FaFacebookF , FaInstagram ,FaWhatsapp , FaLinkedinIn, FaGithub, FaYoutube  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
function HeroSection() {
  return (
    <>
      <section className={`${styles.hero} ${interFont.className}`}>
     <h1>Hey! I&apos;m
      <span> Mrs Asif</span>
      <br /><span>F</span>ull-Stack <span>S</span>oftware <span>E</span>ngineer</h1>

      <p className={styles.summary}>
        Full-Stack Software Engineer with hands-on experience building scalable web apps,
        REST APIs, and AI-powered systems using <span>TypeScript/JavaScript</span> and <span>Python</span>.
        Strong in <span>Next.js</span>, <span>React</span>, <span>FastAPI/Node.js</span>, and cloud-native DevOps
        (Docker, Kubernetes, CI/CD). Experienced in <span>LLM integrations</span> and <span>RAG</span>;
        focused on clean architecture and system design.
      </p>

       {/* button component */}
       <Button text={'Hire Me'}/>
            {/* social icons */}
       <div className={styles.socialIcons}>
       <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF  size={30} color='black'  /></a>
       <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter size={30} color= 'black' /></a>
       <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} color='black'  /></a>
       <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} color='black'  /></a>
       <a href="https://www.linkedin.com/in/razia-fatima-041290329/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={30} color='black'  /></a>
       <a href="https://github.com/MOrhan786" target="_blank" rel="noopener noreferrer"><FaGithub size={30} color='black'  /></a>
       <a href="https://www.youtube.com/@MrsAsif-g3i" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} color='black'  /></a>
       </div>

       {/* botom img div where we use words logo img */}
       <div className= {styles.bottomImageDiv}>
        <Image src={"/image/behance.png"} alt={"behanc img"} width={156} height={156}
         ></Image>
          <Image src={"/image/dribble.png"} alt={"dribble img"} width={156} height={156}
         ></Image>
          <Image src={"/image/upwork.png"} alt={"upwork img"} width={156} height={156}
         ></Image>
          <Image src={"/image/freelance.png"} alt={"freelance img"} width={156} height={156}
         ></Image>
       </div>
         
      </section>
    </>
  )
}

export default HeroSection;