import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

export interface HeaderProps {
    extraClasses?: string;
    rightNavChildren?: JSX.Element;
}

export const Header: React.FC<HeaderProps> = (props) => {

    useEffect(() => {
        const hamburgerButtonClick = (e: any) => {
            const headerMenu = document.querySelector('#header-menu');
            const navButton = document.querySelector('.nav-btn');
            const header = document.querySelector('#header');

            headerMenu?.classList.toggle('active');
            navButton?.classList.toggle('active');
            header?.classList.toggle('translucent');
        };
        const hamburgerButton = document.querySelector('#header-btn')!;
        hamburgerButton.addEventListener('click', hamburgerButtonClick);

        return () => hamburgerButton.removeEventListener('click', hamburgerButtonClick);
    }, []);

    return (
        <div id="header" className={`header header-fixed unselectable header-animated ${props.extraClasses ?? ''}`}>
            <div className="w-100">
                <div className="header__contents mx-auto">
                    <div className="header-brand">
                        <div className="nav-item no-hover">
                            <Link to="/">
                                <h6 className="title">Cirrus</h6>
                            </Link>
                        </div>
                        <div className="nav-item nav-btn" id="header-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="header-nav" id="header-menu">
                        <div className="nav-left">
                            <div className="nav-item">
                                <a className="smoothScroll" href="https://github.com/Spiderpig86/Cirrus" target="_blank" rel='noopener noreferrer'>
                                    <span className="icon">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fab', 'github']} />
                                    </span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a className="smoothScroll" href="/playground" target="_blank" rel='noopener noreferrer'>
                                    <span className="icon">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'palette']} />
                                    </span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a className="smoothScroll" href="#colors">
                                    <span className="icon">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'boxes']} />
                                    </span>
                                </a>
                            </div>
                        </div>

                        {props.rightNavChildren && <div className="nav-right">{props.rightNavChildren}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};
