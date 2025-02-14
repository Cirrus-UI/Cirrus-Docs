import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ClassTable } from '../../../layouts/components/class-table';
import { Tag, VersionTag } from '../../../layouts/components/tag';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import {
    DEFAULT_MAX_ABSOLUTE_SIZE,
    DEFAULT_MIN_ABSOLUTE_SIZE,
    DEFAULT_QUARTILE_PERCENTAGES,
    DEFAULT_SIZING_SYSTEM,
    PAGE_TITLE_PREFIX,
} from '../../../constants';
import { Blockquote } from '../../../layouts/components/blockquote';
import { ExternalLink } from '../../../layouts/components/link';
import { GenerateNegativeClassVariants } from '../../../utils/classes';
import { TITLE_UTILITIES } from '../../../config/sidebar';
import { PseudoVariant } from '../../../layouts/components/pseudo-variant';
import { PseudoVariantsEnum } from '../../../models/psuedo-variant';

export const AbsolutesUtilsPage: React.FC<any> = (props) => {
    const DEFAULT_DIRECTIONS = ['top', 'left', 'bottom', 'right'];
    const DEFAULT_ABSOLUTES = [
        ['0', '0'],
        ['px', '1px'],
        ['auto', 'auto'],
        ...GenerateNegativeClassVariants(DEFAULT_QUARTILE_PERCENTAGES, true),
        ...GenerateNegativeClassVariants(
            DEFAULT_SIZING_SYSTEM.filter((x) => x >= DEFAULT_MIN_ABSOLUTE_SIZE && x <= DEFAULT_MAX_ABSOLUTE_SIZE),
            false
        ),
    ];

    const classTable = DEFAULT_DIRECTIONS.flatMap((direction) => {
        return DEFAULT_ABSOLUTES.map((entry) => {
            return {
                class: `u-${direction}-${entry[0]}`,
                style: `${direction}: ${entry[1]} !important`,
            };
        });
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Absolutes</title>
            </Head>
            <div>
                <section className="padtop" id="absolutes">
                    <div className="content">
                        <Headline title="Absolutes" link="#absolutes" />
                        <div className="divider"></div>
                        <VersionTag version="0.7.2" text="Updated" />
                        <p>
                            Utility classes used to place{' '}
                            <ExternalLink url="https://developer.mozilla.org/en-US/docs/Web/CSS/position#values">
                                positioned elements
                            </ExternalLink>
                            .
                        </p>

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
                            Cirrus comes with utility classes that allow you to anchor any element in any of the 4
                            directions with both positive and negative offsets. The utility classes generally follow
                            this form:{' '}
                            <code>
                                u-[{DEFAULT_DIRECTIONS.join('|')}]-[default sizing value]
                            </code>
                            .
                        </p>
                        <p>
                            These utilities can be used with both{' '}
                            <Link href="/layout/margin/">
                                <a className="u u-LR">Margin</a>
                            </Link>{' '}
                            and{' '}
                            <Link href="/layout/padding/">
                                <a className="u u-LR">Padding</a>
                            </Link>{' '}
                            utility classes to help size and position elements.
                        </p>

                        <div className="space"></div>
                        <div
                            className="grid u-gap-3 grid-cols-2 sm:grid-cols-3"
                            style={{
                                justifyItems: 'center',
                            }}
                        >
                            <div
                                className="u-relative bg-indigo-100 sm:u-round"
                                style={{
                                    height: '8rem',
                                    width: '8rem',
                                }}
                            >
                                <div className="u-absolute u-left-0 u-top-0 u-right-50p u-bottom-50p bg-indigo-500 u-round-sm u-shadow-lg"></div>
                            </div>
                            <div
                                className="u-relative bg-indigo-100 u-round-sm"
                                style={{
                                    height: '8rem',
                                    width: '8rem',
                                }}
                            >
                                <div className="u-absolute u-left-0 u-top-0 u-right-0 u-bottom-50p bg-indigo-500 u-round-sm u-shadow-lg"></div>
                            </div>
                            <div
                                className="u-relative bg-indigo-100 u-round-sm"
                                style={{
                                    height: '8rem',
                                    width: '8rem',
                                }}
                            >
                                <div className="u-absolute u-left-50p u-top-0 u-right-0 u-bottom-50p bg-indigo-500 u-round-sm u-shadow-lg"></div>
                            </div>
                            <div
                                className="u-relative bg-indigo-100 u-round-sm"
                                style={{
                                    height: '8rem',
                                    width: '8rem',
                                }}
                            >
                                <div className="u-absolute u-left-0 u-top-0 u-right-50p u-bottom-0 bg-indigo-500 u-round-sm u-shadow-lg"></div>
                            </div>
                            <div
                                className="u-relative bg-indigo-100 u-round-sm"
                                style={{
                                    height: '8rem',
                                    width: '8rem',
                                }}
                            >
                                <div className="u-absolute u-left-0 u-top-0 u-right-0 u-bottom-0 bg-indigo-500 u-round-sm u-shadow-lg"></div>
                            </div>
                            <div
                                className="u-relative bg-indigo-100 u-round-sm"
                                style={{
                                    height: '8rem',
                                    width: '8rem',
                                }}
                            >
                                <div className="u-absolute u-left-50p u-top-0 u-right-0 u-bottom-0 bg-indigo-500 u-round-sm u-shadow-lg"></div>
                            </div>
                            <div
                                className="u-relative bg-indigo-100 u-round-sm"
                                style={{
                                    height: '8rem',
                                    width: '8rem',
                                }}
                            >
                                <div className="u-absolute u-left-0 u-top-50p u-right-50p u-bottom-0 bg-indigo-500 u-round-sm u-shadow-lg"></div>
                            </div>
                            <div
                                className="u-relative bg-indigo-100 u-round-sm"
                                style={{
                                    height: '8rem',
                                    width: '8rem',
                                }}
                            >
                                <div className="u-absolute u-left-0 u-top-50p u-right-0 u-bottom-0 bg-indigo-500 u-round-sm u-shadow-lg"></div>
                            </div>
                            <div
                                className="u-relative bg-indigo-100 u-round-sm"
                                style={{
                                    height: '8rem',
                                    width: '8rem',
                                }}
                            >
                                <div className="u-absolute u-top-50p u-right-0 u-bottom-0 u-left-50p bg-indigo-500 u-round-sm u-shadow-lg"></div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="grid u-gap-3 grid-cols-2 sm:grid-cols-3">
    <div class="u-relative">
        <div class="u-absolute u-left-0 u-top-0 u-right-50p u-bottom-50p"></div>
    </div>
    <div class="u-relative">
        <div class="u-absolute u-left-0 u-top-0 u-right-0 u-bottom-50p"></div>
    </div>
    <div class="u-relative">
        <div class="u-absolute u-left-50p u-top-0 u-right-0 u-bottom-50p"></div>
    </div>
    <div class="u-relative">
        <div class="u-absolute u-left-0 u-top-0 u-right-50p u-bottom-0"></div>
    </div>
    <div class="u-relative">
        <div class="u-absolute u-left-0 u-top-0 u-right-0 u-bottom-0"></div>
    </div>
    <div class="u-relative">
        <div class="u-absolute u-left-50p u-top-0 u-right-0 u-bottom-0"></div>
    </div>
    <div class="u-relative">
        <div class="u-absolute u-left-0 u-top-50p u-right-50p u-bottom-0"></div>
    </div>
    <div class="u-relative">
        <div class="u-absolute u-left-0 u-top-50p u-right-0 u-bottom-0"></div>
    </div>
    <div class="u-relative">
        <div class="u-absolute u-top-50p u-right-0 u-bottom-0 u-left-50p"></div>
    </div>
</div>
`}
                            language="htmlbars"
                        />

                        <div className="space space--lg"></div>

                        <h6>Negative Offsets</h6>
                        <p>
                            By convention, negative values are prefixed with an <i>n</i> before numerical value. For
                            example, <code>u-left-n50p</code> will set a left offset of -50%.
                        </p>
                        <div className="space space--xl"></div>

                        <div
                            className="u-relative bg-indigo-100 u-round-sm"
                            style={{
                                height: '8rem',
                                width: '8rem',
                            }}
                        >
                            <div
                                className="u-absolute u-top-n50p u-right-n50p bg-indigo-500 u-round-sm u-shadow-xl"
                                style={{ height: '8rem', width: '8rem' }}
                            ></div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="u-relative bg-indigo-100 u-round-sm" style="height: 8rem; width: 8rem;">
    <div class="u-absolute u-top-n50p u-right-n50p bg-indigo-500 u-round-sm u-shadow-xl" style="height: 8rem; width: 8rem;"></div>
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
        flags.$ABSOLUTES: true,
    )
) !default;`}
                                language="scss"
                            />
                        </Blockquote>

                        <p>
                            To use the viewport variant of a given class, you just need to suffix each class with a
                            viewport selector. For example, if I only want <code>u-top-0</code> to be applied to some
                            element for <code>lg</code> and above, then I would use the <code>lg:u-top-0</code> class.
                        </p>

                        <CodeBlock
                            code={`<div class="lg:u-top-0">
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
                            The classes specified above are the default utility classes for setting absolutes. You can
                            add, change, or remove classes within the <code>_config.scss</code> file of Cirrus.
                        </p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        absolute: (
            '10px': 10px
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>This would generate the following additonal classes.</p>
                        <CodeBlock
                            code={`.u-top-10px {
    top: 10px !important
}
.u-left-10px {
    left: 10px !important
}
.u-right-10px {
    right: 10px !important
}
.u-bottom-10px {
    bottom: 10px !important
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
                        sectionName: TITLE_UTILITIES,
                        pageName: `Absolutes`,
                    }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(AbsolutesUtilsPage);
