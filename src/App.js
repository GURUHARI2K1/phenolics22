import React from 'react';
import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import './styles/global.scss'
import './styles/app.scss'
import { Events } from './components/Events';

const App = () => {
    return(
        <>
            <Navbar/>
            <Hero />
            <Events/>
        </>
    )
}

export default App;