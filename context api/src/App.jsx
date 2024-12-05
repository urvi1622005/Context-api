// import React from 'react';
// import{Provider} from './Context';
// import './App.css';
// import Component from './Component';

// function App ()  {
  

//   return (
//     <Provider>
//      <Component/>
//     </Provider>
//   );
// }

// export default App;
import React from 'react'; 
import {Provider} from './Context ';
import Component from './Component';

function App () {
  return(
    <Provider>
      <Component/>
    </Provider>
  );
}