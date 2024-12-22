import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TITLE_ELEMENTS } from '../../../config/sidebar';
import { VersionTag } from '../../../layouts/components/tag';
import { Blockquote } from '../../../layouts/components/blockquote';
import Link from 'next/link';

export const PlaceholderPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Placeholder</title>
            </Head>
            <div>
                <section className="padtop" id="placeholder">
                    <div className="content">
                        <Headline title="Placeholder" link="#placeholder" />
                        <div className="divider"></div>
                        <VersionTag text={`Deprecated`} version={`0.8.0`} />

                        <Blockquote accentColor="#fcd9bd">
                            Note that this has been deprecated as of 0.8.0. Please use our built-in utility classes to re-create a similar component.
                        </Blockquote>
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_ELEMENTS,
                        pageName: `Placeholder`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(PlaceholderPage);
