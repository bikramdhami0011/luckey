
"use client"


import TextReveal from '@/app/component/smallcomp/letterwrite';
import Link from 'next/link';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import styles from "@/app/publicclient/home/pbnote/page.module.css"

const Pbnote = () => {




  useEffect(() => {
    const boxes = document.querySelectorAll('#div');

    gsap.set(boxes, { autoAlpha: 0, y: 100 });

    gsap.to(boxes, {
      autoAlpha: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.4,
      scrollTrigger: {
        trigger: '.box-container',
        start: 'top bottom-=200',
      },
    });
  }, []);
  const semester = ["semester 1", "semester 2", "semester 3", "semester 4", "semester 5", "semester 6", "semester 7", "semester 8"]

  return (
    <div>
      <div>
        <div className={styles.contentAboveGrid}>
          <TextReveal text="The future belongs to those who believe in the beauty of their dreams." />
          <h2>Suggestions for Successful Studying</h2>
          <p>Here are some tips for making the most out of your note-taking and studying:</p>
          <ul>
            <li>Stay organized with your notes.</li>
            <li>Review regularly to reinforce learning.</li>

            {/* Add more suggestions here */}
          </ul>
        </div>
        <div className={styles.containers}>
          <div className={styles['box-container']}>
            <div className={styles.box}>
              <div id="div"  classname={styles.inbox}>
                <h3> {semester[0]}</h3>
                <section style={{ display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", gap: "5px" }}>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}>Introduction to Information Technology </Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}> C Programming</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${503}`}> Digital Logic</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${504}`}> Mathematics I</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${506}`}> Physics</Link>

                </section>

              </div>
              <div id="div"  classname={styles.inbox}>
              
                <h3> {semester[1]}</h3>
                <section style={{ display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", gap: "5px" }}>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}>Introduction to Information Technology </Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}> C Programming</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${503}`}> Digital Logic</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${504}`}> Mathematics I</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${506}`}> Physics</Link>

                </section>
                
              </div>
              <div id="div"  classname={styles.inbox}>
                <h3> {semester[2]}</h3>
                <section style={{ display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", gap: "5px" }}>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}>Introduction to Information Technology </Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}> C Programming</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${503}`}> Digital Logic</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${504}`}> Mathematics I</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${506}`}> Physics</Link>

                </section>
              </div>
              <div id="div"  classname={styles.inbox}>
                <h3> {semester[3]}</h3>
                <section style={{ display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", gap: "5px" }}>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}>Introduction to Information Technology </Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}> C Programming</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${503}`}> Digital Logic</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${504}`}> Mathematics I</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${506}`}> Physics</Link>

                </section>
              </div>
              <div id="div"  classname={styles.inbox}>
                <h3> {semester[4]}</h3>
                <section style={{ display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", gap: "5px" }}>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}>Introduction to Information Technology </Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}> C Programming</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${503}`}> Digital Logic</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${504}`}> Mathematics I</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${506}`}> Physics</Link>

                </section>
              </div>
              <div id="div"  classname={styles.inbox}>
                <h3> {semester[5]}</h3>
                <section style={{ display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", gap: "5px" }}>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}>Introduction to Information Technology </Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}> C Programming</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${503}`}> Digital Logic</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${504}`}> Mathematics I</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${506}`}> Physics</Link>

                </section>
              </div>
              <div id="div"  classname={styles.inbox}>
                <h3> {semester[6]}</h3>
                <section style={{ display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", gap: "5px" }}>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}>Introduction to Information Technology </Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}> C Programming</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${503}`}> Digital Logic</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${504}`}> Mathematics I</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${506}`}> Physics</Link>

                </section>
              </div>
              <div id="div"  classname={styles.inbox}>
                <h3> {semester[7]}</h3>
                <section style={{ display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", gap: "5px" }}>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}>Introduction to Information Technology </Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${502}`}> C Programming</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${503}`}> Digital Logic</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${504}`}> Mathematics I</Link>
                  <Link style={{ textDecoration: "none", color: "white" }} href={`./pbnote/${506}`}> Physics</Link>

                </section>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Pbnote;
