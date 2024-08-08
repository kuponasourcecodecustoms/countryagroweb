import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import React from 'react'
import { LandingPage } from './client/landingPage'
import { ContactUs } from './client/ContactUs'
import { AboutUs } from './client/aboutUs'
import { Location } from './client/Location'
import { Documentation } from './client/documentation'

const App = () => (
    <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL} >
            <Routes>
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
                 <Route
                    exact
                    path="/documentation"
                    element={<Documentation />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </BrowserRouter>
    </div>
)


export default App
