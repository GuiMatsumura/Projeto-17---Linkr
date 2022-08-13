// import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import UserContext from './contexts/UserContext';
// import Signin from './components/signin';
// import Signup from './components/signup';
// import Timeline from './components/Timeline.js';

// function App() {
//   const [token, setToken] = useState('');

//   return (
//     <UserContext.Provider value={{ token, setToken }}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Signin />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/timeline" element={<Timeline />} />
//         </Routes>
//       </BrowserRouter>
//     </UserContext.Provider>
//   );
// }

// ReactDOM.render(<App />, document.querySelector('.root'));

import ReactDOM from 'react-dom';
import App from './components/App.js';
ReactDOM.render(<App />, document.querySelector('.root'));
