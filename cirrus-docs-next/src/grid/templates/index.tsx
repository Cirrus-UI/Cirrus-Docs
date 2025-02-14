import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { DEFAULT_COLUMN_SIZING_SYSTEM, DEFAULT_ROW_SIZING_SYSTEM, PAGE_TITLE_PREFIX } from '../../../constants';
import { Tag, VersionTag } from '../../../layouts/components/tag';
import { TITLE_GRID } from '../../../config/sidebar';
import { ClassTable } from '../../../layouts/components/class-table';
import { PseudoVariant } from '../../../layouts/components/pseudo-variant';
import { PseudoVariantsEnum } from '../../../models/psuedo-variant';

export const GridTemplatesPage: React.FC<any> = (props) => {

    const GRID_COLUMN_CLASS_TABLE = DEFAULT_COLUMN_SIZING_SYSTEM.map((size) => {
        return {
            class: `grid-cols-${size}`,
            style: `--grid-template-column: repeat(${size}, minmax(0, 1fr));`,
        };
    });
    const GRID_ROW_CLASS_TABLE = DEFAULT_ROW_SIZING_SYSTEM.map((size) => {
        return {
            class: `grid-rows-${size}`,
            style: `--grid-template-row: repeat(${size}, minmax(0, 1fr));
grid-template-rows: var(--grid-template-row);`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Grid Templates</title>
            </Head>
            <div>
                <section className="padtop" id="templates">
                    <div className="content">
                        <Headline title="Grid Templates" link="#templates" />
                        <div className="divider"></div>
                        <VersionTag version={`0.5.5`} />

                        <p>
                            A series of utility classes that provide an easy abstraction over <b>CSS grid</b>.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>
                        <p>The basic idea of CSS grid is to use it as a way to lay out elements on a page, like so.</p>
                        <div className="grid u-gap-2 u-text-center font-bold">
                            <div className="grid-c-12 bg-indigo-200 text-indigo-700 u-round-xs">
                                <p>Header</p>
                            </div>
                            <div className="grid-c-4 grid-r-6 bg-indigo-200 text-indigo-700 u-round-xs">
                                <p>Sidebar</p>
                            </div>
                            <div className="grid-c-8 grid-r-3 bg-indigo-200 text-indigo-700 u-round-xs">
                                <p>Main Content</p>
                            </div>
                            <div className="grid-c-4 grid-r-3 bg-indigo-200 text-indigo-700 u-round-xs">
                                <p>Sub Content</p>
                            </div>
                            <div className="grid-c-4 grid-r-3 bg-indigo-200 text-indigo-700 u-round-xs">
                                <p>Sub Content</p>
                            </div>
                            <div className="grid-c-12 bg-indigo-200 text-indigo-700 u-round-xs">
                                <p>Footer</p>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="grid u-gap-2 u-text-center font-bold">
    <div class="grid-c-12 bg-indigo-200 text-indigo-700 u-round-xs" style="">
        <p>Header</p>
    </div>
    <div class="grid-c-4 grid-r-6 bg-indigo-200 text-indigo-700 u-round-xs" style="">
        <p>Sidebar</p>
    </div>
    <div class="grid-c-8 grid-r-3 bg-indigo-200 text-indigo-700 u-round-xs" style="">
        <p>Main Content</p>
    </div>
    <div class="grid-c-4 grid-r-3 bg-indigo-200 text-indigo-700 u-round-xs" style="">
        <p>Sub Content</p>
    </div>
    <div class="grid-c-4 grid-r-3 bg-indigo-200 text-indigo-700 u-round-xs" style="">
        <p>Sub Content</p>
    </div>
    <div class="grid-c-12 bg-indigo-200 text-indigo-700 u-round-xs" style="">
        <p>Footer</p>
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>

                        <p>
                            Before diving into how templates work, let's take a look at the building blocks of CSS grid.
                        </p>
                        <p>
                            Inside a <code>grid</code> layout consists of elements of varying row and column spans. For
                            now, any element you add inside of a grid layout will take up 1 unit of space.
                        </p>
                        <p>
                            For example, if we define a layout using <code>grid grid-rows-2</code>, a single{' '}
                            <code>div</code> will use slot 1 of 2 of the columns. Adding another <code>div</code> will
                            use slot 2 of 2. Adding any more will just overflow onto the next row. See{' '}
                            <Link href={`#sizes-rows`}>below</Link> for more info.
                        </p>

                        <div className="grid u-gap-2 grid-cols-2">
                            <div className="_grid-ex">
                                <p>grid-cols-2</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-2</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-2</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-2</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="sizes-cols">
                    <div className="content">
                        <Headline title="Template Sizes - Columns" link="#sizes-cols" size="4" />
                        <div className="divider"></div>
                        <VersionTag version="0.7.2" />
                        <p>
                            By default, the default <code>grid</code> class supports up to <code>12</code> columns. To
                            change this, you can use any of the <code>grid-cols-[1-12]</code> classes.
                        </p>

                        <ClassTable classTable={GRID_COLUMN_CLASS_TABLE} />
                        <PseudoVariant defaultEnabledPseudos={[PseudoVariantsEnum.RESPONSIVE]} />
                        <div className="space space--lg"></div>

                        <div className="grid u-gap-2 grid-cols-1">
                            <div className="_grid-ex">
                                <p>grid-cols-1</p>
                            </div>
                        </div>

                        <div className="grid u-gap-2 grid-cols-2">
                            <div className="_grid-ex">
                                <p>grid-cols-2</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-2</p>
                            </div>
                        </div>

                        <div className="grid u-gap-2 grid-cols-3">
                            <div className="_grid-ex">
                                <p>grid-cols-3</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-3</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-3</p>
                            </div>
                        </div>

                        <div className="grid u-gap-2 grid-cols-4">
                            <div className="_grid-ex">
                                <p>grid-cols-4</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-4</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-4</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-4</p>
                            </div>
                        </div>
                        <div className="space"></div>

                        <p>
                            As another example, let's use a grid of 3 columns with the <code>grid-cols-3</code> class.
                        </p>
                        <div className="row">
                            <div className="lg:col-6">
                                <div className="grid grid-cols-3 u-gap-2">
                                    <div className=" _grid-ex">
                                        <p>1</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>2</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>3</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>4</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>5</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>6</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>7</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>8</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>9</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-6">
                                <CodeBlock
                                    code={`<div class="grid grid-cols-3 u-gap-2">
    <div>
        <p>1</p>
    </div>
    <div>
        <p>2</p>
    </div>
    <div>
        <p>3</p>
    </div>
    <div>
        <p>4</p>
    </div>
    <div>
        <p>5</p>
    </div>
    <div>
        <p>6</p>
    </div>
    <div>
        <p>7</p>
    </div>
    <div>
        <p>8</p>
    </div>
    <div>
        <p>9</p>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space"></div>
                        <p>
                            If you want to specify the number of rows a <code>grid</code> has, then you must use the{' '}
                            <code>grid-cols-[1-12]</code> class. By default, a <code>grid</code> has{' '}
                            <code>grid-template-rows</code> set to <code>auto</code>.
                        </p>

                        <div className="grid grid-rows-3 grid-cols-2 grid-flow-col u-gap-2 font-bold">
                            <div className="u-text-center p-2 u-round-xs bg-orange-200 text-orange-700">1</div>
                            <div className="u-text-center p-2 u-round-xs bg-orange-200 text-orange-700">2</div>
                            <div className="u-text-center p-2 u-round-xs bg-orange-200 text-orange-700">3</div>
                            <div className="u-text-center p-2 u-round-xs bg-orange-200 text-orange-700">4</div>
                            <div className="u-text-center p-2 u-round-xs bg-orange-200 text-orange-700">5</div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="grid grid-rows-3 grid-cols-2 grid-flow-col u-gap-2 font-bold">
  <div class="u-text-center p-2 u-round-xs bg-orange-200 text-orange-700">1</div>
  <div class="u-text-center p-2 u-round-xs bg-orange-200 text-orange-700">2</div>
  <div class="u-text-center p-2 u-round-xs bg-orange-200 text-orange-700">3</div>
  <div class="u-text-center p-2 u-round-xs bg-orange-200 text-orange-700">4</div>
  <div class="u-text-center p-2 u-round-xs bg-orange-200 text-orange-700">5</div>
</div>`}
                            language={`htmlbars`}
                        />
                    </div>
                </section>

                <section className="padtop" id="sizes-rows">
                    <div className="content">
                        <Headline title="Template Sizes - Rows" link="#sizes-rows" size="4" />
                        <div className="divider"></div>
                        <VersionTag version="0.7.2" />
                        <p>
                            By default, the default <code>grid</code> class supports up to <code>6</code> rows. To
                            change this, you can use any of the <code>grid-rows-[1-6]</code> classes.
                        </p>

                        <ClassTable classTable={GRID_ROW_CLASS_TABLE} />
                        <PseudoVariant defaultEnabledPseudos={[PseudoVariantsEnum.RESPONSIVE]} />
                        <div className="space space--lg"></div>

                        <div className="grid u-gap-2 grid-rows-1">
                            <div className="_grid-ex grid-r-1">
                                <p>1</p>
                            </div>
                        </div>

                        <div className="grid u-gap-2 grid-rows-2">
                            <div className="_grid-ex grid-r-2">
                                <p>2</p>
                            </div>
                            <div className="_grid-ex grid-r-1">
                                <p>1</p>
                            </div>
                        </div>

                        <div className="grid u-gap-2 grid-rows-3">
                            <div className="_grid-ex grid-r-3">
                                <p>3</p>
                            </div>
                            <div className="_grid-ex grid-r-2">
                                <p>2</p>
                            </div>
                            <div className="_grid-ex grid-r-1">
                                <p>1</p>
                            </div>
                        </div>

                        <div className="grid u-gap-2 grid-rows-4">
                            <div className="_grid-ex grid-r-4">
                                <p>4</p>
                            </div>
                            <div className="_grid-ex grid-r-3">
                                <p>3</p>
                            </div>
                            <div className="_grid-ex grid-r-2">
                                <p>2</p>
                            </div>
                            <div className="_grid-ex grid-r-1">
                                <p>1</p>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            language="html"
                            code={`<div class="grid u-gap-2 grid-rows-1">
    <div class="grid-r-1"><p>1</p></div>
</div>
<div class="grid u-gap-2 grid-rows-2">
    <div class="grid-r-2"><p>2</p></div>
    <div class="grid-r-1"><p>1</p></div>
</div>
<div class="grid u-gap-2 grid-rows-3">
    <div class="grid-r-3"><p>3</p></div>
    <div class="grid-r-2"><p>2</p></div>
    <div class="grid-r-1"><p>1</p></div>
</div>
<div class="grid u-gap-2 grid-rows-4">
    <div class="grid-r-4"><p>4</p></div>
    <div class="grid-r-3"><p>3</p></div>
    <div class="grid-r-2"><p>2</p></div>
    <div class="grid-r-1"><p>1</p></div>
</div>
`}
                        />
                    </div>
                </section>

                <section className="padtop" id="responsive">
                    <div className="content">
                        <Headline title="Responsive" link="#responsive" size="4" />
                        <div className="divider"></div>
                        <VersionTag version={`0.7.0`} />
                        <p>
                            To use the viewport variant of a given class, you just need to suffix each class with a
                            viewport selector. For example, if I only want <code>grid</code> to be applied to some
                            contaner for <code>lg</code> and above, then I would use the <code>lg:grid</code> class.
                        </p>

                        <CodeBlock
                            code={`<div class="lg:grid">
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
                        <Tag
                            leftProps={{ classes: 'tag tag--dark', text: 'Updated' }}
                            rightProps={{ classes: 'tag tag--info', text: '0.7.0' }}
                        />
                        <p>
                            By default, <code>grid</code> is preset with 12 individual columns horizontally with a
                            variable amount of rows. This value can be changed in the framework as well by modifying the
                            grid count inside <code>_config.scss</code>.
                        </p>

                        <CodeBlock
                            code={`$config: (
    extend: (
        grid: (
            properties: (
                grid-columns: 64, // Default is 12
            )
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>
                            The following classes will also be generated to reflect the changes with{' '}
                            <code>$grid-columns</code>. For example, if the value was changed to <code>64</code>, Cirrus
                            will generate up to <code>grid-c-64</code>, <code>grid-r-64</code>, etc. for these classes:
                        </p>
                        <ul>
                            <li>
                                <code>grid-cols</code>
                            </li>
                            <li>
                                <code>grid-c</code>
                            </li>
                            <li>
                                <code>grid-r</code>
                            </li>
                            <li>
                                <code>grid-cs</code>
                            </li>
                            <li>
                                <code>grid-ce</code>
                            </li>
                            <li>
                                <code>grid-rs</code>
                            </li>
                            <li>
                                <code>grid-re</code>
                            </li>
                        </ul>
                        <p>
                            The same idea also applies to the <code>grid-rows</code> class. Instead, you will have to
                            update the <code>grid-rows</code> property in the configuration.
                        </p>
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_GRID,
                        pageName: `Templates`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(GridTemplatesPage);
