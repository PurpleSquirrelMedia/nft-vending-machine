import React from "react";
import ContentContainerClear from "../content-container-clear/ContentContainerClear";
import { HOME_HEADLINE, HOME_SUBHEAD, HOME_BODY } from "../../lib/constants";
import styles from "./HeroCopy.module.scss";

const HeroCopy = () => {
  return (HOME_SUBHEAD) ? (
    <ContentContainerClear autoHeight={false} className='content-container-clear' >
      <div className={styles["content"]}>
          <h3
            className={styles["subhead"]}
            dangerouslySetInnerHTML={{ __html: HOME_SUBHEAD + "<br/>" + HOME_BODY }}
          >
            {/* 100% of proceeds go to Metaplex's <span style={{background: '-webkit-linear-gradient(top, #0057b7 50%, #ffd700 50%)', WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'}}>Help Ukraine</span> Campaign<br/>
            Learn more here: donate.metaplex.com */}
          </h3>
      </div>
    </ContentContainerClear>
  ) : null;
};

export default HeroCopy;
