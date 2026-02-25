import React from "react";
import styles from "./Services.module.css";
import { caveatFont, interFont } from "@/font";
import ServicesCard from  '../services-card/ServicesCard';

function Services() {
  return (
    <>
      <section id="service" className={styles.services}>
        <h1 className={caveatFont.className}>
          <span>W</span>hat <span>I</span> <span>D</span>o <span>F</span>or{" "}
          <span>C</span>lients
        </h1>

        <p className={interFont.className}>
          I offer end-to-end web solutions — from stunning UI designs to fully functional
          <br />
          web applications, tailored to meet your business goals.
        </p>

        <div className={styles.servicesCardDiv}>
          <ServicesCard/>
        </div>
      </section>
    </>
  );
}

export default Services;