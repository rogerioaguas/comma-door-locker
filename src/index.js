import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {Header} from "./components/Header.component";
import {Tutorial} from "./components/Tutorial";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
alert('serviceWorker' in navigator)
if ('serviceWorker' in navigator) {
    console.log('ABC')
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js');
    });
}
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tutorial" element={<Tutorial/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
