import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const NavButton = ({title,nav}) => {
        const navigation = useNavigate();
        return (
            <button onClick={() => navigation(nav)}>
                {title}
            </button>
        
        );
    };

    const HomeHeader = () => {
        return(
            <h1 className='HomeHeader'>
                AppDev Companion
            </h1>
        );
    };

    return(
        <>
            <HomeHeader />
            <div id="links">
                <NavButton title={"Announcements"} nav={"/announcements"} />
                <NavButton title={"Attendance"} nav={"/attendance"} />
                <NavButton title={"Discussion"} nav={"/announcements"} />
                <NavButton title={"Materials"} nav={"/materials"} />
                <NavButton title={"Grading"} nav={"/grading"} />
                <NavButton title={"Homework"} nav={"/homework"} />
            </div>
        </>
    );
}

export default Home;
