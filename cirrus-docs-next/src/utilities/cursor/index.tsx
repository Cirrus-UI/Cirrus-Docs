import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ClassTable } from '../../../layouts/components/class-table';
import { Tag } from '../../../layouts/components/tag';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { Blockquote } from '../../../layouts/components/blockquote';
import { TITLE_UTILITIES } from '../../../config/sidebar';

export const CursorUtilsPage: React.FC<any> = (props) => {
    const classTable = [
        'auto',
        'pointer',
        'wait',
        'text',
        'move',
        'help',
        'not-allowed',
        'none',
        'cell',
        'crosshair',
        'grab',
        'grabbing',
        'all-scroll',
        'col-resize',
        'row-resize',
        'zoom-in',
        'zoom-out',
    ].map((clazz) => {
        return {
            class: `u-cursor-${clazz}`,
            style: `cursor: ${clazz};`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Cursor</title>
            </Head>
            <div>
                <section className="padtop" id="cursor">
                    <div className="content">
                        <Headline title="Cursor" link="#cursor" />
                        <div className="divider"></div>
                        <Tag
                            leftProps={{
                                classes: `tag--dark`,
                                text: `New`,
                            }}
                            rightProps={{
                                classes: `tag--info`,
                                text: `0.8.0`,
                            }}
                        />
                        <p>These are utility classes that specify the cursor style of elements.</p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        <p>
                            Below is a demo of all supported cursor utility classes. <br />
                            <i className="text-sm font-bold text-gray-600">
                                🖱 Hover over the buttons below to try them out.
                            </i>
                        </p>

                        <div className="md:grid grid-cols-2">
                            {classTable.map((entry, index) => (
                                <button
                                    key={index}
                                    className={`bg-indigo-600 mx-1 text-white border-indigo-700 ${entry.class}`}
                                >
                                    {entry.class}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="padtop" id="responsive">
                    <div className="content">
                        <Headline title="Responsive" link="#responsive" size="4" />
                        <div className="divider"></div>

                        <Blockquote accentColor={'#fcd9bd'}>
                            <p>
                                ⚠ Note that the viewport variants are disabled in the default build of Cirrus. To
                                enable, you must enable it yourself in <code>_configs.scss</code> and create a custom
                                build or enable it in the config in your Sass project.
                            </p>

                            <div className="space"></div>

                            <CodeBlock
                                code={`//_configs.scss
$config: (
    viewports: (
        flags.$CURSOR: true,
    )
) !default;`}
                                language="scss"
                            />
                        </Blockquote>

                        <p>
                            To use the viewport variant of a given class, you just need to suffix each class with a
                            viewport selector. For example, if I only want <code>u-cursor-pointer</code> to be applied
                            to some element for <code>lg</code> and above, then I would use the{' '}
                            <code>lg:u-cursor-pointer</code> class.
                        </p>

                        <CodeBlock
                            code={`<div class="lg:u-cursor-pointer">
    <!-- ... -->
</div>`}
                            language="html"
                        />

                        <p>
                            For more information, visit the{' '}
                            <Link href="/fundamentals/viewports">
                                <a className="u u-LR">Viewports</a>
                            </Link>{' '}
                            documentation.
                        </p>
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_UTILITIES,
                        pageName: `Cursor`,
                    }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(CursorUtilsPage);
