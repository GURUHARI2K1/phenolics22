import React from 'react';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import './styles/global.scss'
import './styles/app.scss'

const App = () => {
    return(
        <>
            <Navbar/>
            <Home/>
        </>
    )
}

export default App;