

import React from 'react';
import styles from "@/app/publicclient/home/page.module.css"// Import your CSS module

const PublicHome = () => {
  return (
    <div className={styles.homebody}>
   
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to Student Note Store</h1>
          <p className={styles.description}>Find and download notes for your studies.</p>
          
          <a href="https://www.google.com/search?q=google&rlz=1C1KNTJ_enNP1070NP1070&oq=google&aqs=chrome.0.35i39i650j46i67i131i199i433i465i650j69i59j69i60j69i65l3j69i60.2333j0j7&sourceid=chrome&ie=UTF-8" className={styles.button}>Browse Notes</a>
        </div>
      </section>

      <section className={styles.featuredNotes}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Notes</h2>
          
        </div>
      </section>

      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How It Works</h2>

        </div>
      </section>

 
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Student Testimonials</h2>
       
        </div>
      </section>
    </div>
  );
};

export default PublicHome;
