import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Context } from '../../store/store';
import { setPageAtTop } from '../../store/reducer';
import { VERSION } from '../../constants';
import { ExternalLink } from '../components/link';
import { loadScripts } from '../../utils/scripts';

import initializeAlgolia from '../../static/js/algolia.js';

export const LandingLayout = ({ children, ...rest }: any) => {
    // Bind Redux Store
    const { state, dispatch } = useContext(Context);

    const [scrollTop, setScrollTop] = useState(0);


    loadScripts(['https://cdn.jsdelivr.net/npm/@docsearch/js@3'], () => initializeAlgolia(), []);

    // Track scroll top
    useEffect(() => {
        const onScroll = (e: any) => {
            const scrollOffset = e.target.documentElement.scrollTop;
            setScrollTop(scrollOffset);
            if (scrollOffset % 10 === 0) {
                // Hopefully there is less lag
                setPageAtTop(scrollOffset <= 10, dispatch);
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollTop]);

    const rightNavContent = (
        <>
            <div
                className="nav-item u-justify-flex-end"
                style={{
                    flexGrow: 1,
                }}
            >
                <div id="cirrus-search"></div>
            </div>
            <div className="nav-item has-sub p-1">
                <div className="list-dropdown dropdown-right">
                    <div className="btn-group">
                        <button className="btn-transparent p-0">
                            <ExternalLink url="https://github.com/Spiderpig86/Cirrus/releases">Download</ExternalLink>
                        </button>
                        <button className="btn-transparent btn--sm btn-dropdown u-no-shadow p-0">
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'caret-down']} />
                            </span>
                        </button>
                        <ul className="menu">
                            <li className="menu-item selected">
                                <a className="u-flex u-justify-content-center" href="!#">
                                    <b>{VERSION}</b>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="u-flex u-justify-content-center" href="https://v0-7-2.cirrus-ui.com/">
                                    0.7.2
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="u-flex u-justify-content-center" href="https://v0-6-3.cirrus-ui.com/">
                                    0.6.3
                                </a>
                            </li>
                            <li className="menu-item">
                                <a
                                    className="u-flex u-justify-content-center"
                                    href="https://spiderpig86.github.io/Cirrus/"
                                >
                                    0.5.5
                                </a>
                            </li>
                            <li className="menu-item">
                                <a
                                    className="u-flex u-justify-content-center"
                                    href="https://spiderpig86.github.io/Cirrus/0.5.4"
                                >
                                    0.5.4
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <>
            <Header
                extraClasses={scrollTop <= 10 ? 'header-clear header-landing' : 'header-light'}
                rightNavChildren={rightNavContent}
            />
            {children}
            <Footer />
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></script>
        </>
    );
};
