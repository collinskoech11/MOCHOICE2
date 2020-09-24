import React from 'react';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import CustomNavBar from './Components/CustomNavBar';
import Home from './Components/Home'
import CustomFooter from './Components/CustomFooter';

function App() {
  return (
    <Router>
    <div>
     <CustomNavBar/>
      <Route exact path="/" component={Home}/>
    <CustomFooter/>
</div>
</Router>
  );
}

export default App;
