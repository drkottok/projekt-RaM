import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import MyPosts from "./Components/Profile/MyPost/MyPosts";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <div>
                     <Routes>
                    <Route path='/dialogs' element={<Dialogs />}/>
                    <Route path='/profile' element={<Profile />}/>

                     </Routes>
                     </div>


                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}


export default App;
