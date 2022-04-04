import propTypes from "prop-types";
import styles from "./ContentContainerClear.module.scss";

const ContentContainerClear = ({ children, className, autoHeight, mode }) => {
  return (
    <div
      className={`${styles["content-container"]} ${
        !autoHeight ? styles["auto-height"] : ""
      } ${styles[mode]} ${className}`}
    >
      {children}
    </div>
  );
};

ContentContainerClear.propTypes = {
  autoHeight: propTypes.bool,
  mode: propTypes.oneOf(["success", "error", "default"]),
};

ContentContainerClear.defaultProps = {
  className: "",
  mode: "default",
  autoHeight: true,
};

export default ContentContainerClear;
