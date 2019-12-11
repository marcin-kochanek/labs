import React, { useState } from "react";

const WithAuth = (WrappedComponent) => {
    const WithAuthComponent = (props) => {
        const [isAuthorised, setIsAuthorised] = useState(false);
        const toggleAuth = () => setIsAuthorised(!isAuthorised);

        return <WrappedComponent isAuthorised={isAuthorised} toggleAuth={toggleAuth} {...props} />
    }
    return WithAuthComponent;
}

export default WithAuth;
