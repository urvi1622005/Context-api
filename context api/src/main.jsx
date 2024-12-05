// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Provider } from './Context.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider>
//     <App />
//     </Provider>
//   </React.StrictMode>,
// )
import React from 'react'
import {Provider} from './Context'
import App from './App.jsx'
import ReactDom from 'react-dom/client'

ReactDom.createRoot(document.getElemnentById('root')).render(
  <React.StrictMode>
    <Provider>
      <App/>
    </Provider>
  
  </React.StrictMode>
)