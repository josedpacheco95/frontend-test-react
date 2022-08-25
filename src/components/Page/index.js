import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Page.module.sass";
import { TabContainer } from "../../containers/TabContainer/"
import { FooterContainer } from "../../containers/Footer/";
import CancelTabContainer from "../../containers/CancelTabContainer";
const Page = ({ children, tab = true, footer = true, cancelTab = false}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.page}>
      { tab? <TabContainer /> : null }
      { cancelTab? <CancelTabContainer /> : null }
      <div className={styles.body}>{children}</div>
      { footer? <FooterContainer /> : null }
    </div>
  );
};

export default Page;
