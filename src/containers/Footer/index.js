import { useState } from "react";
import cn from "classnames";
import styles from "./Footer.module.sass";
import { ReactComponent as Facebook } from "../../assets/social-media/facebook.svg";
import { ReactComponent as Instragram } from "../../assets/social-media/instagram-white.svg";

const schedules = [
  {
    day: "Lunes",
    hours: "10:00 - 23:00"
  },
  {
    day: "Martes",
    hours: "10:00 - 23:00"
  },
  {
    day: "Miercoles",
    hours: "10:00 - 23:00"
  },
  {
    day: "Jueves",
    hours: "10:00 - 23:00"
  },
  {
    day: "Viernes",
    hours: "9:00 - 23:00"
  },
  {
    day: "Sabado",
    hours: "10:00 - 23:00"
  },
  {
    day: "Domingo",
    hours: "10:00 - 23:00"
  },
]

export const FooterContainer = () => {
  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.container)}>
          <div className={styles.Schedule}>
            <span className={styles.scheduleTitle}>Horario</span>
            <div className="row"> 
              <div className={cn("col-3", styles.footerScheduleCol)}>
                {schedules.map(schedule => (
                  <span>{schedule.day}</span>
                ))}
              </div>
              <div className={cn("col", styles.footerScheduleCol)}>
                {schedules.map(schedule => (
                  <span>{schedule.hours}</span>
                ))}
              </div>
            </div>
          </div>
        <div className={styles.copyright}>
          <span className={styles.appName}>Scan Defi</span>
          <div className={styles.socialMedia}>
            <a href="#"><Instragram /></a>
            <a href="#"><Facebook /></a>
          </div>
          <a href="#"><span>Terms and conditions</span></a>
          <a href="#"><span>Privacy policy</span></a>
          <a href="#"><span>Legal warning</span></a>
        </div>
      </div>
      <div>
      </div>
    </footer>
  );
};

export default FooterContainer;
