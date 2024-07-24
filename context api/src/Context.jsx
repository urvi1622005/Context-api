import React,{createContext,useState} from 'react';
const Context = createContext();
const Provider =({ children }) => {
    const[name,setState]=useState("urvi");
    const[age,setAge]=useState("19");
    

    return(
        <Context.Provider value={{name,age,setAge,setState}}>
            {children}
        </Context.Provider>
    );
};

export {Provider,Context};