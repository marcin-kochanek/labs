import React, { useState, useContext, useEffect } from "react";
import cx from "classnames";
import styles from "./MultiStep.module.scss";

const WizardContext = React.createContext({
  currentPage: 1,
  changePage: () => {},
  pageIndexes: [],
  updatePageIndexes: () => {}
});

const ProgressBar = () => {
  const { currentPage, pageIndexes } = useContext(WizardContext);

  const innerBarWidth = {
    transform: `scaleX(${currentPage / pageIndexes.length})`
  }

  return (
    <div className={cx([styles.outerWrapper])}>
      <div style={innerBarWidth} className={cx([styles.innerBar])} />
    </div>
  );
};

const Page = ({ children, pageIndex }) => {
  const { currentPage, updatePageIndexes } = useContext(WizardContext);
  useEffect(() => {
    updatePageIndexes(pageIndex);
  });

  return currentPage === pageIndex ? children : null;
};

const Controls = () => {
  const { currentPage, changePage, pageIndexes } = useContext(WizardContext);

  return (
    <div className="columns is-centered">
      <button
        disabled={currentPage === 1}
        className="button is-primary"
        onClick={() => changePage(currentPage - 1)}
      >
        Previous
      </button>
      <button
        disabled={currentPage === pageIndexes.length}
        className="button is-info"
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
      <button
        disabled={currentPage !== pageIndexes.length}
        className="button is-warning"
      >
        Submit
      </button>
    </div>
  );
};

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageIndexes, setPageIndexes] = useState([]);

  const changePage = newPageIndex => setCurrentPage(newPageIndex);
  const updatePageIndexes = pageIndex => {
    if (pageIndexes.includes(pageIndex)) {
      return;
    }

    setPageIndexes([...pageIndexes, pageIndex]);
  };

  return (
    <WizardContext.Provider
      value={{
        currentPage,
        changePage,
        pageIndexes,
        updatePageIndexes
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export default {
  ProgressBar,
  Page,
  Controls,
  Wizard
};
