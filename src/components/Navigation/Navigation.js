import React, { useState } from 'react';
import { MenuOutlined, CloseCircleOutlined } from '@ant-design/icons';
import './Navigation.css';

const Navigation = props => {

    const [ openButtonClass, setOpenButtonClass ] = useState('open-nav-button visible');
    const [ sliderClass, setSliderClass ] = useState("nav-slider closed");
    const [ closeButtonClass, setCloseButtonClass ] = useState("close-nav-button hidden");
    const [ linkClass, setLinkClass ] = useState('link hidden');

    const toggleNav = () => {
        if (sliderClass.includes('closed')) {
            setOpenButtonClass('open-nav-button hidden');
            setSliderClass('nav-slider open');
            setCloseButtonClass('close-nav-button visible');
            setLinkClass('link visible');
        } else {
            setOpenButtonClass('open-nav-button visible');
            setSliderClass('nav-slider closed');
            setCloseButtonClass('close-nav-button hidden');
            setLinkClass('link hidden'); 
        }
    }

    const clickLinkHandler = clickedNavLink => {
        props.click(clickedNavLink);
        toggleNav();
    }

    return (
        <section className="navigation">
            <button className={openButtonClass} onClick={toggleNav}>
                <MenuOutlined className="menu-icon" />
            </button>
            <div className={sliderClass}>
                <button className={closeButtonClass} onClick={toggleNav}>
                    <CloseCircleOutlined className="menu-icon" />
                </button>
                <nav className="navigation-links">
                    <ul>
                        <li className={linkClass} onClick={() => clickLinkHandler('about')}>About</li>
                        <li className={linkClass} onClick={() => clickLinkHandler('skills')}>Skills</li>
                        <li className={linkClass} onClick={() => clickLinkHandler('projects')}>Projects</li>
                        <li className={linkClass} onClick={() => clickLinkHandler('blog')}>Blog</li>
                        <li className={linkClass} onClick={() => clickLinkHandler('contact')}>Contact</li>
                    </ul>
                </nav>
            </div>
        </section>
    )
};

export default Navigation;