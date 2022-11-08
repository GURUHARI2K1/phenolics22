import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Event from './pages/Event' 
import './styles/global.scss'
import './styles/app.scss'
import Detail from './pages/Detail';
import details from './details';

const App = () => {
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/events" element={<Event/>}/>
                {details.map(detail => <Route path={detail.route} element={<Detail det={detail}/>}/>)}
            </Routes>
        </>
    )
}

export default App;