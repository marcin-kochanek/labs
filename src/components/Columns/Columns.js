import React from "react";
import cx from "classnames";
import styles from "./Columns.module.scss";
import WithCollapse from "../hoc/WithCollapse";
import WithAuth from "../hoc/WithAuth";

const Columns = ({ isCollapsed, isAuthorised, toggle, toggleAuth }) => {
  const rowClass = cx("columns", {
    [styles.isCollapsed]: isCollapsed ,
  });

  return (
    <div className="columns">
      <div className="column">
        <p>Authorised: {isCollapsed.toString()}</p>
        <button className={cx("button", "is-dark", "is-large", [styles.button])} onClick={toggle}>Collapse</button>
        <button className={cx("button", "is-warning", "is-large", [styles.button])} onClick={toggleAuth}>{isAuthorised ? 'logout' : 'login'}</button>
        {isAuthorised ? (
          <div className={rowClass}>
            <div className="column">
              <div className="notification is-primary">First column</div>
            </div>
            <div className="column">
              <div className="notification is-primary">Second column</div>
            </div>
            <div className="column">
              <div className="notification is-primary">Third column</div>
            </div>
            <div className="column">
              <div className="notification is-primary">Fourth column</div>
            </div>
          </div>) : (
            <p className="title is-5">You must to login to see this content.</p>
          )}
      </div>
    </div>
  );
};

export default WithAuth(WithCollapse(Columns));
