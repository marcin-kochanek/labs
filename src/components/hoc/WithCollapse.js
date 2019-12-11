import React, { useState } from "react";

const WithCollapse = WrappedComponent => {
  const WithCollapseComponent = props => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggle = () => setIsCollapsed(!isCollapsed);

    return <WrappedComponent toggle={toggle} isCollapsed={isCollapsed}  {...props}/>;
  }
  return WithCollapseComponent;
};

export default WithCollapse;
