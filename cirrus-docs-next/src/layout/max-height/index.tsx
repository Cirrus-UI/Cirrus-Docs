import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ClassTable } from '../../../layouts/components/class-table';
import { Blockquote } from '../../../layouts/components/blockquote';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { TITLE_LAYOUT } from '../../../config/sidebar';
import { PseudoVariant } from '../../../layouts/components/pseudo-variant';
import { PseudoVariantsEnum } from '../../../models/psuedo-variant';

export const MaxHeightPage: React.FC<any> = (props) => {
    const DEFAULT_CLASSES = {
        none: 'none',
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',
        screen: '100vh',
    };

    let classTable = Object.entries(DEFAULT_CLASSES).map((entry) => {
        return {
            class: `max-h-${entry[0]}`,
            style: `max-height: ${entry[1]};`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Max Height</title>
            </Head>

            <div>
                <section className="padtop" id="max-height">
                    <div className="content">
                        <Headline title="Max Height" link="#max-height" />
                        <div className="divider"></div>
                        <p>Classes to set the maximum height of an element.</p>

                        <ClassTable classTable={classTable} />
                        <div className="space"></div>

                        <PseudoVariant defaultEnabledPseudos={[PseudoVariantsEnum.RESPONSIVE]} />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        <p>
                            Using these classes it quite simple to control the maximum height an element should have.
                            You can either use a percentage based class or use a class to span the whole screen using
                            the <code>max-h-[size]</code> syntax.
                        </p>

                        <div className="p-4 bg-green-100 u-round-xs text-white font-bold u-text-center">
                            <div className="max-h-100p p-2 bg-green-500 u-round-xs">max-h-100p</div>
                        </div>
                        <div className="space"></div>

                        <CodeBlock
                            code={`<div class="p-4 bg-green-100 u-round-xs text-white font-bold u-text-center">
    <div class="max-h-100p p-2 bg-green-500 u-round-xs">max-h-100p</div>
</div>`}
                            language="htmlbars"
                        />
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
        flags.$MAX-HEIGHT: true,
    )
) !default;`}
                                language="scss"
                            />
                        </Blockquote>

                        <p>
                            To use the viewport variant of a given class, you just need to suffix each class with a
                            viewport selector. For example, if I only want <code>max-h-0</code> to be applied to some
                            element for <code>lg</code> and above, then I would use the <code>lg:max-h-0</code> class.
                        </p>

                        <CodeBlock
                            code={`<div class="lg:max-h-0">
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

                <section className="padtop" id="variants">
                    <div className="content">
                        <Headline title="Variants" link="#variants" size="4" />
                        <div className="divider"></div>

                        <p>
                            The classes specified above are the default utility classes for setting maximum heights. You
                            can add, change, or remove classes within the <code>_config.scss</code> file of Cirrus.
                        </p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        max-heights: (
            '25p': '25%',
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>This would generate the following additonal classes.</p>
                        <CodeBlock
                            code={`.max-h-25p {
    max-height: 25% !important;
}`}
                            language="css"
                        />
                        <p>
                            Learn more about how to extend Cirrus to support your use cases in the{' '}
                            <Link href="/getting-started/configuration">
                                <a className="u u-LR">Configuration</a>
                            </Link>{' '}
                            documentation.
                        </p>
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_LAYOUT,
                        pageName: `Max Height`,
                    }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(MaxHeightPage);
