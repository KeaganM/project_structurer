import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Header from "./components/HeaderComponents/Header";
import Footer from "./components/FooterComponents/Footer";
import SideNav from "./components/SidebarComponents/SideNav";

import reportWebVitals from './reportWebVitals';

// todo may want to figure out the proper way of importing css, right know it is using materialize from the cdn

var main_components = [
    {component: <App/>, id: 'root'},
    {component: <Header/>, id: 'header'},
    {component: <Footer/>, id: 'footer'},
    {component: <SideNav/>, id: 'sidenav'},
]

for (var i = 0; i < main_components.length; i++) {
    // console.log(main_components[i].component)
    ReactDOM.render(
        main_components[i].component,
        document.getElementById(main_components[i].id)
    )
}

// examples of how to render react components, header will be rendered into the element with the id of header
// and app will be rendered in the element with the id of root
// ReactDOM.render(
//   <React.StrictMode>
//     <Header/>
//   </React.StrictMode>,
//   document.getElementById('header')
// );
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
