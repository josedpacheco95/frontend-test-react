import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Page.module.sass";
import CancelTabContainer from "../../containers/CancelTabContainer";
const Page = ({ children, cancelTab = false}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.page}>
      { cancelTab? <CancelTabContainer /> : null }
      <div className={styles.body}>{children}</div>

    </div>
  );
};

export default Page;
