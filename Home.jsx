import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';


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
        return (
            <>
                <h1 className='HomeHeader'>
                    AppDev Companion
                </h1>
                <p>
                    This site is your one-stop place for everything related to your bootcamp. 
                    Find course materials, check out announcements, and stay on top of assignments—all in one spot.
                </p>
            </>
        );
    };

    const Footer = () => {
        return (
            <footer>
                <p>2024 AppDev Companion</p>
                <a href="https://appdevclub.com/" target="_blank">
                Main AppDev Site
                </a>
            </footer>
        );
    };

    return(
        <div className='home-page'>
            <HomeHeader />
            <div id="links">
                <NavButton title={"Announcements"} nav={"/announcements"} />
                <NavButton title={"Attendance"} nav={"/attendance"} />
                <NavButton title={"Discussion"} nav={"/announcements"} />
                <NavButton title={"Materials"} nav={"/materials"} />
                <NavButton title={"Grading"} nav={"/grading"} />
                <NavButton title={"Homework"} nav={"/homework"} />
            </div>
            <Footer />
        </div>
    );
}
export default Home;

