import React,{useContext} from 'react';
import { Context } from './Context.js';

const Component = () => {

    const [State,setState] = useContext(Context);

  return (
    <div>
        <p>{State}</p>
        <p>{name} </p>
        <button onClick={() => setState("new value")}>Change Value</button>
    </div>
  );

};

export default Component;
