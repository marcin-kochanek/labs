import { useState } from 'react';

const Collapse = ({ render }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggle = () => setIsCollapsed(!isCollapsed);

    const renderProps = {
        isCollapsed,
        toggle
    }

    return render(renderProps);
};

export default Collapse;
