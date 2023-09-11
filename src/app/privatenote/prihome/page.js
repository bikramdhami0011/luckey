
import { MdAddPhotoAlternate } from 'react-icons/md';
import styles from "@/app/privatenote/prihome/page.module.css"
import DailyRoutine from "./pricomponent/othercomp/DailyRoutine";
export default function PrivateHome() {
  return (
    <div >
      <div className={styles.homecontainer} >
        <div className={styles.dandimg}>
          <div className={styles.homedetail}>

            <h1> Student Details</h1>
            <p>Name:Bikram dhami</p>
            <p>Collage:FWU</p>
            <p>Email:dhami@gmail.com</p>
          </div>

          <div className={styles.imagecontainer}>
            <div className={styles.setimage}>

              <MdAddPhotoAlternate  size={100}  className={styles.addphoto}/> {/* Add photo icon */}
            </div>
          </div>
        </div>

        <div className={styles.dialyroutine}>
          <DailyRoutine></DailyRoutine>
        </div>

      </div>
    </div>
  )
}