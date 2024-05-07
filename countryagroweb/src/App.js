import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from 'react';
import { LandingPage } from './client/landingPage';
import { ContactUs } from './client/ContactUs';
import { AboutUs } from './client/aboutUs';
import { Location } from './client/Location';

function App() {
  return (
    <div className="App">
       <>
            {/* This is the alias of BrowserBrowserRouter i.e. BrowserRouter */}
            <BrowserRouter>
                <Routes>
                    {/* This route is for LandingPage component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        exact
                        path="/"
                        element={<LandingPage />}
                    />
                    <Route
                        exact
                        path="/contact-us"
                        element={<ContactUs />}
                    />
                    <Route
                        exact
                        path="/about-us"
                        element={<AboutUs />}
                    />
                    <Route
                        exact
                        path="/location"
                        element={<Location />}
                    />
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    </div>
  );
}

export default App;
