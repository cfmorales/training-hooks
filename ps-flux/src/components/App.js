import React from 'react';
import About from "./About";
import HomePage from "./HomePage";
import Header from "./common/Header";
import Courses from "./Courses";

const App = () => {
    const getPage = () => {

        const route = window.location.pathname;
        if (route === "/about") return <About/>;
        if (route === "/courses") return <Courses/>;

        return <HomePage/>;
    };
    return (<div className='container-fluidt'>
        <Header/>
        {getPage()}
    </div>);

};

export default App;