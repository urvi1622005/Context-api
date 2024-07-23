import React,{createContext,useState} from 'react';
const Context = createContext();
const Provider =({ children }) =>{
    const[State,setState]=useState("default value");

    return(
        <Context.Provider value={[State,setState]}>
            {children}
        </Context.Provider>
    );
};

export {Provider,Context}