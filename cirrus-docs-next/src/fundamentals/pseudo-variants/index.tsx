import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { TITLE_FUNDAMENTALS } from '../../../config/sidebar';
import { title } from 'process';

export const PseudoVariantsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Pseudo Variants</title>
            </Head>
            <div>
                <section className="padtop" id="pseudo-variants">
                    <div className="content">
                        <Headline title="Pseudo Variants" link="#pseudo-variants" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="responsive">
                    <div className="content">
                        <Headline title="Responsive" link="#responsive" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="dark-light">
                    <div className="content">
                        <Headline title="Dark/Light" link="#dark-light" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="reduce-motion">
                    <div className="content">
                        <Headline title="Reduce Motion" link="#reduce-motion" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="first-last-of-type">
                    <div className="content">
                        <Headline title="First/Last of Type" link="#first-last-of-type" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="portrait-landscape">
                    <div className="content">
                        <Headline title="Portrait/Landscape" link="#portrait-landscape" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="hover-group-hover">
                    <div className="content">
                        <Headline title="Hover/Group Hover" link="#hover-group-hover" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="focus-group-focus">
                    <div className="content">
                        <Headline title="Focus/Group Focus" link="#focus-group-focus" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="focus-visible">
                    <div className="content">
                        <Headline title="Focus Visible" link="#focus-visible" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="focus-within">
                    <div className="content">
                        <Headline title="Focus Within" link="#focus-within" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="active">
                    <div className="content">
                        <Headline title="Active" link="#active" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="visited">
                    <div className="content">
                        <Headline title="Visited" link="#visited" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="checked">
                    <div className="content">
                        <Headline title="Checked" link="#checked" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="disabled">
                    <div className="content">
                        <Headline title="Disabled" link="#disabled" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Typography',
                        link: './typography',
                    }}
                    nextLink={{
                        name: 'Viewports',
                        link: './viewports',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(PseudoVariantsPage);
