
import React from 'react'

import Link from 'next/link'

import styles from "./page.module.css"

import TextReveal from './letterwrite'


const Enterpage = () => {
  return (
    <div>
    <div>

        <TextReveal text="Welcom to our NoteLibrary..." ></TextReveal>
      <div className={styles.cenword}>
        <div>

        <h5>If you cannot do great things, do small things in a great way !!!</h5>
        </div>
      </div>
      <div className={styles.btndiv}>
      <div className={styles.btndiv2}>
        <Link href="../../publicclient/home" className={styles.gradientButton}>
          Public Note
        </Link>
        <p></p>
        <Link href="../../privatenote/signinup/signin" className={styles.gradientButton}>
          Private Note
        </Link>
      </div>
    </div>
      </div>
    </div>

     

  )
}

export default Enterpage;