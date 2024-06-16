import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { TITLE_LAYOUT } from '../../../config/sidebar';

export const FootersPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Footer</title>
            </Head>
            <div>
                <section className="padtop" id="footer">
                    <div className="content">
                        <Headline title="Footer" link="#footer" />
                        <div className="divider"></div>

                        <p>
                            Cirrus provides a styling for your footer using the <code>footer</code> class.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>

                        <p>The footer structure comes with a couple of classes to help out with designing.</p>
                        <h6>Structure</h6>
                        <ul>
                            <li>
                                <code>footer</code> serves as the main base component of the *<i>drum roll...</i>*
                                footer. By default, it comes with equal padding at the top and bottom of{' '}
                                <code>6rem</code> and a margin top of <code>5rem</code> to create a separation between
                                the main content and the footer.
                            </li>
                            <ul>
                                <li>
                                    At this point, pretty much anything can be placed into the <code>footer</code>, but
                                    there are a few footer specific components worth mentioning.
                                </li>
                                <li>
                                    <code>footer__list-title</code> is a standard list title in the footer with a bottom
                                    border.
                                </li>
                                <li>
                                    <code>footer__list-item</code> provides default stylings for list items. These can
                                    be used in combination with Cirrus's columns to create a clean site map.
                                </li>
                            </ul>
                        </ul>
                        <div className="space"></div>

                        <LazyLoad height={200}>
                            <iframe
                                className="w-100p"
                                title="Footer Demo"
                                src="/static/html/demo-footer.html"
                            />
                        </LazyLoad>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<footer class="footer">
    <h6 class="footer__title text-white uppercase">Logo</h6>
    <div class="content">
        <div class="divider"></div>

        <div class="row">
            <div class="md:col-4">
                <ul class="no-bullets">
                    <a href="!#">
                        <li class="footer__list-item">Home</li>
                    </a>
                    <a href="!#">
                        <li class="footer__list-item">Sign Up</li>
                    </a>
                    <a href="!#">
                        <li class="footer__list-item">Downloads</li>
                    </a>
                    <ul>
                    </ul>
                </ul>
            </div>
            <div class="md:col-4">
                <ul class="no-bullets">
                    <a href="!#">
                        <li class="footer__list-item">Company Information</li>
                    </a>
                    <a href="!#">
                        <li class="footer__list-item">Contact Us</li>
                    </a>
                    <a href="!#">
                        <li class="footer__list-item">Reviews</li>
                    </a>
                    <ul>
                    </ul>
                </ul>
            </div>
            <div class="md:col-4">
                <ul class="no-bullets">
                    <a href="!#">
                        <li class="footer__list-item">FAQ</li>
                    </a>
                    <a href="!#">
                        <li class="footer__list-item">Help Desk</li>
                    </a>
                    <a href="!#">
                        <li class="footer__list-item">Forums</li>
                    </a>
                    <ul>
                    </ul>
                </ul>
            </div>
        </div>
    </div>
    <p class="subtitle">Company © 2018.</p>
</footer>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="static">
                    <div className="content">
                        <Headline title="Static" link="#static" size="4" />
                        <div className="divider"></div>
                        <p>
                            Static footers are designed to stick to the bottom of a page. To make a static footer, add
                            the <code>footer--fixed</code> class to the footer.
                        </p>

                        <LazyLoad height="200">
                            <iframe
                                className="w-100p"
                                title="Static Footer"
                                src="/static/html/demo-footer-static.html"
                            />
                        </LazyLoad>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<footer class="footer footer--fixed" style="padding: 2rem 0; opacity: 0.95;">
    <h6 class="footer__title text-white uppercase">Footer</h6>
    <div class="content u-text-center">
        <p class="m-0">Sign up to hear about the latest updates via email</p>
        <div class="row">
            <div class="md:col-5">
                <input class="input--sm" type="text" placeholder="Name">
            </div>
            <div class="md:col-5">
                <input class="input--sm" type="text" placeholder="Email">
            </div>
            <div class="md:col-2">
                <button class="btn btn--sm">Sign Up</button>
            </div>
        </div>
    </div>
</footer>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        <p>Below are some examples to help you get started.</p>

                        <h6>Custom Footer</h6>
                        <LazyLoad height="200">
                            <iframe
                                className="w-100p"
                                title="Flexible Footer"
                                src="/static/html/demo-footer-flexible.html"
                            />
                        </LazyLoad>
                        <p className="info">The footer style used above.</p>
                        <CodeBlock
                            code={`footer {
    width: 100%;
    background-color: #fff;
    background: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(https://images.unsplash.com/photo-1514227765494-1bbd6ba05916?auto=format&fit=crop&w=1600&q=100) no-repeat;
}`}
                            language="css"
                        />
                        <div className="space space--lg"></div>

                        <h6>Minimal Footer</h6>
                        <p>
                            A minimal footer for a clean website. Only having the copyright, logo, and social links can
                            be sufficient. Simple, clean, and to the point.
                        </p>
                        <LazyLoad height="200">
                            <iframe
                                className="w-100p"
                                title="Minimal Footer"
                                src="/static/html/demo-footer-minimal.html"
                            />
                        </LazyLoad>
                        <div className="space space--lg"></div>

                        <h6>Site Footer</h6>
                        <p>
                            A minimal footer for a clean website. Only having the copyright, logo, and social links can
                            be sufficient. Simple, clean, and to the point.
                        </p>
                        <LazyLoad height="200">
                            <iframe
                                className="w-100p"
                                title="Footer Map"
                                src="/static/html/demo-footer-map.html"
                            />
                        </LazyLoad>
                        <div className="space space--lg"></div>

                        <h6>Newsletter</h6>
                        <p>
                            Make your footer standout with a simple contact or sign up form. This is great for blogs and
                            other media sites.
                        </p>
                        <LazyLoad height="200">
                            <iframe
                                className="w-100p"
                                title="Footer Newsletter"
                                src="/static/html/demo-footer-newsletter.html"
                            />
                        </LazyLoad>
                        <div className="space space--lg"></div>

                        <h6>Newsletter</h6>
                        <p>
                            Make your footer standout with a simple contact or sign up form. This is great for blogs and
                            other media sites.
                        </p>
                        <LazyLoad height="200">
                            <iframe
                                className="w-100p"
                                title="Social Footer"
                                src="/static/html/demo-footer-social.html"
                            />
                        </LazyLoad>
                        <div className="space space--lg"></div>
                        <div className="placeholder">
                            <div className="placeholder-icon">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'clock']} />
                                </span>
                                <h5 className="placeholder-title light">Coming Soon</h5>
                                <p className="placeholder-subtitle">
                                    Currently working hard coming up with different designs. Check back later.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_LAYOUT,
                        pageName: `Footer`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(FootersPage);
