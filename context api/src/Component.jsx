import React,{useContext} from 'react';
import { Context } from './Context.jsx';

const Component = () => {

    const [name,setName] = useContext(Context);
    const [age,setAge] = useContext(Context);

  return (
    <div>
        <p>{name}</p>
        <p>{age} </p>
        <button onClick={() => setName("new value")}>Change Value</button>
        <button onClick={() => setAge("new age")}>Change Age</button>
    </div>
  );

};

export default Component;
