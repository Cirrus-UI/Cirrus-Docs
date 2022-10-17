import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ExternalLink } from '../../../layouts/components/link';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { TITLE_BUTTONS } from '../../../config/sidebar';

export const ButtonGlyphsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Button Glyphs</title>
            </Head>
            <div>
                <section className="padtop" id="glyphs">
                    <div className="content">
                        <Headline title="Glyphs" link="#glyphs" />
                        <div className="divider"></div>
                        <p>
                            Buttons can contain different glyphs from external libraries such as{' '}
                            <ExternalLink url="https://fontawesome.com/">Font Awesome</ExternalLink>.
                        </p>

                        <h6>Glyph on the left</h6>
                        <button>
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper pad-right" icon={['fas', 'chevron-left']} />
                            </span>
                            See More
                        </button>
                        <CodeBlock
                            code={`<button>See More<i class="fa-wrapper fa fa-chevron-right pad-left"></i></button>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <h6>Glyph on the right</h6>
                        <button>
                            See More
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper pad-left" icon={['fas', 'chevron-right']} />
                            </span>
                        </button>
                        <CodeBlock
                            code={`<button><i class="fa-wrapper fa fa-chevron-left pad-right"></i>See More</button>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <h6>Glyph with different sizes</h6>
                        <div className="btn-container">
                            <button className="btn--xs">
                                Xsmall
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-left" icon={['fas', 'chevron-right']} />
                                </span>
                            </button>
                        </div>
                        <div className="btn-container">
                            <button className="btn--sm">
                                Small
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-left" icon={['fas', 'chevron-right']} />
                                </span>
                            </button>
                        </div>
                        <div className="btn-container">
                            <button>
                                Normal
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-left" icon={['fas', 'chevron-right']} />
                                </span>
                            </button>
                        </div>
                        <div className="btn-container">
                            <button className="btn--lg">
                                Large
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-left" icon={['fas', 'chevron-right']} />
                                </span>
                            </button>
                        </div>
                        <div className="btn-container">
                            <button className="btn--xl">
                                XLarge
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-left" icon={['fas', 'chevron-right']} />
                                </span>
                            </button>
                        </div>
                        <CodeBlock
                            code={`<button class="btn--xs">XSmall<i class="fa-wrapper fa fa-chevron-right pad-left "></i></button>
<button class="btn--sm">Small<i class="fa-wrapper fa fa-chevron-right pad-left "></i></button>
<button>Normal<i class="fa-wrapper fa fa-chevron-right pad-left"></i></button>
<button class="btn--lg">Large<i class="fa-wrapper fa fa-chevron-right pad-left"></i></button>
<button class="btn--xl">XLarge<i class="fa-wrapper fa fa-chevron-right pad-left "></i></button>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_BUTTONS,
                        pageName: `Glyphs`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ButtonGlyphsPage);
