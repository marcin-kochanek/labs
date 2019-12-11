import React, { useContext } from 'react';

const MyContext = React.createContext();

const User = () => {
    const context = useContext(MyContext);

    return (
        <div>
            <p>User: {context.name}</p>
        </div>
    )
};

const Users = () => (
    <div>
        <MyContext.Provider value={{ name: 'Marcin '}} >
            <User />
        </MyContext.Provider>
    </div>
);

export default Users;