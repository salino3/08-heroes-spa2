import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import  {HoroesApp}  from './HoroesApp';
import { BrowserRouter } from 'react-router-dom';
// npm install react-router-dom@6

 const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
  <BrowserRouter>
      <HoroesApp  />
  </BrowserRouter>
</React.StrictMode>
);


