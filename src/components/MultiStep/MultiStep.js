import React, { useState, useContext } from 'react';

const WizardContext = React.createContext({
    currentPage: 1,
    changePage: () => {}
});

const Page = ({ children, pageIndex }) => {
    const { currentPage } = useContext(WizardContext);

    return (
        currentPage === pageIndex ? children : null
    );
};

const Controls = () => {
    const { currentPage, changePage } = useContext(WizardContext);

    return (
        <>
            <button className="button is-primary" onClick={() => changePage(currentPage - 1)}>Previous</button>
            <button className="button is-warning" onClick={() => changePage(currentPage + 1)}>Next</button>
            <button>Submit</button>
        </>
    )
};

const Wizard = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const changePage = newPageIndex => setCurrentPage(newPageIndex);

    return (
        <WizardContext.Provider value={{
            currentPage,
            changePage
        }}>
            {children}
        </WizardContext.Provider>
    )
};

export default {
    Page,
    Controls,
    Wizard
}