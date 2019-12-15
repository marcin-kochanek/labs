import React from "react";
import styles from "./ItemList.module.scss";
import cx from "classnames";
import Collapse from "../providers/Collapse";

const items = [`Docs1`, `Docs2`, `Docs3`, `Docs4`, `Docs5`];

const ItemsList = () => {
  const listClass = isCollapsed => cx(styles.list, {
    [styles.isCollapsed]: isCollapsed,
  });

  return (
    <Collapse render={({ isCollapsed, toggle }) => (
      <div>
        <button className="button is-dark is-large" onClick={toggle}>
          Collapse
      </button>
        <ul className={listClass(isCollapsed)}>
          {items.map((item, index) => (
            <li key={index} className="notification is-primary">{item}</li>
          ))}
        </ul>
      </div>
      )}
    />
  );
}

export default ItemsList;
