import React from 'react'
import styles from './HeroSection.module.css'
import { interFont } from '@/font';
import Button from '../button/Button';
import { FaFacebookF , FaInstagram ,FaWhatsapp , FaTelegramPlane   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
function HeroSection() {
  return (
    <>
      <section className={`${styles.hero} ${interFont.className}`}>
     <h1>Hey! I&apos;m 
      <span> Mrs Asif</span>
      <br /><span>I</span>  &apos;m A Front End Web Developer</h1>

      <p>I can build user interface for web sites and application with 
        <span> React JS</span> and {" "}
        <span>Next js </span>
       <br /> I love the front end development.</p>

       {/* button component */}
       <Button text={'Hire Me'}/>
            {/* social icons */}
       <div className={styles.socialIcons}>
       <FaFacebookF  size={30} color='black'  />
       <FaXTwitter size={30} color= 'black' />
       < FaInstagram size={30} color='black'  />
       <FaWhatsapp size={30} color='black'  />
       < FaTelegramPlane size={30} color='black'  />
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