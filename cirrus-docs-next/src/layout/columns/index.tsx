import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';
import LazyLoad from 'react-lazyload';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { DefaultLayout } from '../../../layouts/default';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { BreakpointsDemo } from './breakpoints-demo';
import { toc } from './toc';

import initializeExamples from '../../../static/js/fluid-column-example.js';
import { DEFAULT_COLUMN_SIZING_SYSTEM, DEFAULT_MAX_COLUMN, PAGE_TITLE_PREFIX } from '../../../constants';
import { TITLE_LAYOUT } from '../../../config/sidebar';
import { ClassTable } from '../../../layouts/components/class-table';

export const ColumnsPage: React.FC<any> = (props) => {
    const COLUMN_CLASS_TABLE = DEFAULT_COLUMN_SIZING_SYSTEM.map((size) => {
        return {
            class: `col-${size}`,
            style: `width: ${(1 / DEFAULT_MAX_COLUMN) * size * 100}%;`,
        };
    });
    const OFFSET_CLASS_TABLE = DEFAULT_COLUMN_SIZING_SYSTEM.map((size) => {
        return {
            class: `offset-${size}`,
            style: `margin-left: ${(1 / DEFAULT_MAX_COLUMN) * size * 100}%;`,
        };
    });

    useEffect(() => {
        initializeExamples();
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Columns</title>
            </Head>
            <span>
                <section className="padtop" id="columns">
                    <div className="content">
                        <Headline title="Columns" link="#columns" />
                        <div className="divider"></div>

                        <p>
                            Classes for using Cirrus' column system powered by Flexbox. By default, 12 columns are
                            created. However, this can be modified to any number you'd like by modifying a{' '}
                            <Link href="/grid/templates#customization">
                                <a className="u u-LR">single variable</a>
                            </Link>{' '}
                            and rebuilding the project.
                        </p>

                        <p>
                            Also check out{' '}
                            <Link href="/grid/templates">
                                <a className="u u-LR">Grid</a>
                            </Link>{' '}
                            for an alternate way to lay out elements on the page.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>
                        <p>
                            Every flexbox layout begins with a <code>row</code>. Every <code>row</code> contains columns
                            represented with the <code>col-[1-12]</code> class.
                        </p>

                        <ClassTable classTable={COLUMN_CLASS_TABLE} />
                        
                        <div id="grids">
                            <div className="row">
                                <div className="md:col-12 uppercase">
                                    <div className="uppercase">Col-12</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="md:col-11 uppercase">
                                    <div className="uppercase">Col-11</div>
                                </div>
                                <div className="md:col-1 uppercase">
                                    <div className="uppercase">Col-1</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="md:col-10 uppercase">
                                    <div className="uppercase">Col-10</div>
                                </div>
                                <div className="md:col-2 uppercase">
                                    <div className="uppercase">Col-2</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="md:col-9 uppercase">
                                    <div className="uppercase">Col-9</div>
                                </div>
                                <div className="md:col-3 uppercase">
                                    <div className="uppercase">Col-3</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="md:col-8 uppercase">
                                    <div className="uppercase">Col-8</div>
                                </div>
                                <div className="md:col-4 uppercase">
                                    <div className="uppercase">Col-4</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="md:col-7 uppercase">
                                    <div className="uppercase">Col-7</div>
                                </div>
                                <div className="md:col-5 uppercase">
                                    <div className="uppercase">Col-5</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="md:col-6 uppercase">
                                    <div className="uppercase">Col-6</div>
                                </div>
                                <div className="md:col-6 uppercase">
                                    <div className="uppercase">Col-6</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="md:col-5 uppercase">
                                    <div className="uppercase">Col-5</div>
                                </div>
                                <div className="md:col-7 uppercase">
                                    <div className="uppercase">Col-7</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="md:col-4 uppercase">
                                    <div className="uppercase">Col-4</div>
                                </div>
                                <div className="md:col-8 uppercase">
                                    <div className="uppercase">Col-8</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="md:col-3 uppercase">
                                    <div className="uppercase">Col-3</div>
                                </div>
                                <div className="md:col-9 uppercase">
                                    <div className="uppercase">Col-9</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="md:col-2 uppercase">
                                    <div className="uppercase">Col-2</div>
                                </div>
                                <div className="md:col-10 uppercase">
                                    <div className="uppercase">Col-10</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="md:col-1 uppercase">
                                    <div className="uppercase">Col-1</div>
                                </div>
                                <div className="md:col-11 uppercase">
                                    <div className="uppercase">Col-11</div>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="row">
    <div class="md:col-12 uppercase">
        <div class="uppercase">Col-12</div>
    </div>
</div>
<div class="row">
    <div class="md:col-11 uppercase">
        <div class="uppercase">Col-11</div>
    </div>
    <div class="md:col-1 uppercase">
        <div class="uppercase">Col-1</div>
    </div>
</div>
<div class="row">
    <div class="md:col-10 uppercase">
        <div class="uppercase">Col-10</div>
    </div>
    <div class="md:col-2 uppercase">
        <div class="uppercase">Col-2</div>
    </div>
</div>
<div class="row">
    <div class="md:col-9 uppercase">
        <div class="uppercase">Col-9</div>
    </div>
    <div class="md:col-3 uppercase">
        <div class="uppercase">Col-3</div>
    </div>
</div>
<div class="row">
    <div class="md:col-8 uppercase">
        <div class="uppercase">Col-8</div>
    </div>
    <div class="md:col-4 uppercase">
        <div class="uppercase">Col-4</div>
    </div>
</div>
<div class="row">
    <div class="md:col-7 uppercase">
        <div class="uppercase">Col-7</div>
    </div>
    <div class="md:col-5 uppercase">
        <div class="uppercase">Col-5</div>
    </div>
</div>
<div class="row">
    <div class="md:col-6 uppercase">
        <div class="uppercase">Col-6</div>
    </div>
    <div class="md:col-6 uppercase">
        <div class="uppercase">Col-6</div>
    </div>
</div>
<div class="row">
    <div class="md:col-5 uppercase">
        <div class="uppercase">Col-5</div>
    </div>
    <div class="md:col-7 uppercase">
        <div class="uppercase">Col-7</div>
    </div>
</div>
<div class="row">
    <div class="md:col-4 uppercase">
        <div class="uppercase">Col-4</div>
    </div>
    <div class="md:col-8 uppercase">
        <div class="uppercase">Col-8</div>
    </div>
</div>
<div class="row">
    <div class="md:col-3 uppercase">
        <div class="uppercase">Col-3</div>
    </div>
    <div class="md:col-9 uppercase">
        <div class="uppercase">Col-9</div>
    </div>
</div>
<div class="row">
    <div class="md:col-2 uppercase">
        <div class="uppercase">Col-2</div>
    </div>
    <div class="md:col-10 uppercase">
        <div class="uppercase">Col-10</div>
    </div>
</div>
<div class="row">
    <div class="md:col-1 uppercase">
        <div class="uppercase">Col-1</div>
    </div>
    <div class="md:col-11 uppercase">
        <div class="uppercase">Col-11</div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>
                        <h6>No Space</h6>
                        <p>
                            By default, columns come with <code>1 rem</code> of space between the columns. To remove it,
                            add the <code>no-space</code> class to the <code>row</code>.
                        </p>
                        <div id="grids">
                            <div className="row no-space">
                                <div className="md:col-6">
                                    <div className="uppercase">Col-6</div>
                                </div>
                                <div className="md:col-6">
                                    <div className="uppercase">Col-6</div>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="row no-space">
    <div class="md:col-6">
        <div class="uppercase">Col-6</div>
    </div>
    <div class="md:col-6">
        <div class="uppercase">Col-6</div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>
                        <h6>Automatic Overflow</h6>
                        <p>
                            If there is not enough space in a given row for all the column elements, elements will
                            automatically wrap.
                        </p>
                        <div id="grids">
                            <div className="row">
                                <div className="md:col-6">
                                    <div className="uppercase">col-6</div>
                                </div>
                                <div className="md:col-6">
                                    <div className="uppercase">col-6</div>
                                </div>
                                <div className="md:col-6">
                                    <div className="uppercase">col-6</div>
                                </div>
                                <div className="md:col-6">
                                    <div className="uppercase">col-6</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="md:col-9">
                                    <div className="uppercase">col-9</div>
                                </div>
                                <div className="md:col-9">
                                    <div className="uppercase">col-9</div>
                                </div>
                                <div className="md:col-9">
                                    <div className="uppercase">col-9</div>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <p>
                            To change this behavior, you can use the <code>row--no-wrap</code> utility class.
                        </p>
                        <div id="grids">
                            <div className="row row--no-wrap">
                                <div className="md:col-10">
                                    <div className="uppercase">col-10</div>
                                </div>
                                <div className="md:col-10">
                                    <div className="uppercase">col-10</div>
                                </div>
                                <div className="md:col-10">
                                    <div className="uppercase">col-10</div>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="row u-no-wrap">
    <div class="md:col-10">
        <div class="uppercase">col-10</div>
    </div>
    <div class="md:col-10">
        <div class="uppercase">col-10</div>
    </div>
    <div class="md:col-10">
        <div class="uppercase">col-10</div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>
                        <h6>Auto Columns</h6>
                        <p>
                            These are columns denoted with the <code>col</code> class. The elements will automatically
                            resize based on how many elements are present in the <code>row</code>
                        </p>

                        <div id="grids">
                            <div className="row" id="fluidContainerTest">
                                <div className="col">
                                    <div className="uppercase">col</div>
                                </div>
                                <div className="col">
                                    <div className="uppercase">col</div>
                                </div>
                                <div className="col">
                                    <div className="uppercase">col</div>
                                </div>
                            </div>
                            <div className="btn-group btn-group-fill">
                                <button className="btn-primary" id="fluid-container-add">
                                    Add Column
                                </button>
                                <button className="btn-primary" id="fluid-container-delete">
                                    Delete Column
                                </button>
                            </div>
                        </div>
                        <div className="space"></div>
                        <p>
                            By default, the elements will wrap to the next row if there is not enough space. To disable
                            it, add the <code>u-no-wrap</code> class to your <code>row</code>.
                        </p>
                        <p>
                            If you mix sized columns with auto sized columns, the auto sized columns will grow to fill
                            remaining space.
                        </p>

                        <div id="grids">
                            <div className="row">
                                <div className="md:col-2">
                                    <div className="uppercase">col-2</div>
                                </div>
                                <div className="col">
                                    <div className="uppercase">col</div>
                                </div>
                                <div className="col">
                                    <div className="uppercase">col</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="viewports">
                    <div className="content">
                        <Headline title="Viewports" link="#viewports" size="4" />
                        <div className="divider"></div>

                        <p>
                            In Cirrus, columns have 4 different variants based on breakpoints: <code>xs</code>,{' '}
                            <code>sm</code>, <code>md</code>, and <code>lg</code>.
                        </p>
                        <p>
                            For example, to set the breakpoint for <code>col-5</code> to stack only for <code>sm</code>{' '}
                            or smaller, you should use <code>sm:col-5</code>.
                        </p>

                        <p>
                            For more info, view the docs for{' '}
                            <Link href="/fundamentals/viewports">
                                <a className="u u-LR">viewports</a>
                            </Link>
                            .
                        </p>

                        <table className="table bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <code>col-*</code>
                                    </td>
                                    <td>No stacking.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>sm:col-*</code>
                                    </td>
                                    <td>
                                        Stack columns for widths below <code>640px</code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>md:col-*</code>
                                    </td>
                                    <td>
                                        Stack columns for widths below <code>768px</code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>lg:col-*</code>
                                    </td>
                                    <td>
                                        Stack columns for widths below <code>1024px</code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>xl:col-*</code>
                                    </td>
                                    <td>
                                        Stack columns for widths below <code>1280px</code>.
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p>
                            To get a better idea of how these breakpoints work, take a look at the example below by
                            resizing your browser window.
                        </p>

                        <BreakpointsDemo />
                    </div>
                </section>

                <section className="padtop" id="offset">
                    <div className="content">
                        <Headline title="Offset" link="#offset" size="4" />
                        <div className="divider"></div>

                        <p>
                            Instead of using empty columns to create offsets for columns, the <code>offset-*</code>{' '}
                            class when when applied on the <code>col-[1-12]</code> will offset the column to the right.
                        </p>
                        <p>
                            In other words, a column with <code>col-5 offset-3</code> is offset from the left by the
                            same width of a <code>col-3</code>.
                        </p>

                        <ClassTable classTable={OFFSET_CLASS_TABLE} />

                        <div id="grids">
                            <div className="row">
                                <div className="md:col-3 offset-1">
                                    <div className="uppercase">offset-1</div>
                                </div>
                                <div className="md:col-3 offset-3">
                                    <div className="uppercase">offset-3</div>
                                </div>
                                <div className="md:col-3 offset-4">
                                    <div className="uppercase">offset-4</div>
                                </div>
                                <div className="md:col-3 offset-6">
                                    <div className="uppercase">offset-6</div>
                                </div>
                                <div className="md:col-3 offset-9">
                                    <div className="uppercase">offset-9</div>
                                </div>
                            </div>
                        </div>
                        <CodeBlock
                            code={`<div class="row">
    <div class="md:col-3 offset-1">
        <div class="uppercase">offset-1</div>
    </div>
    <div class="md:col-3 offset-3">
        <div class="uppercase">offset-3</div>
    </div>
    <div class="md:col-3 offset-4">
        <div class="uppercase">offset-4</div>
    </div>
    <div class="md:col-3 offset-6">
        <div class="uppercase">offset-6</div>
    </div>
    <div class="md:col-3 offset-9">
        <div class="uppercase">offset-9</div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <p>
                            For less specific spacing, you can use <code>offset-right</code> to push the column to the
                            left, <code>offset-center</code> to push the column to the center, and{' '}
                            <code>offset-left</code> to push the column to the right.
                        </p>

                        <div className="space"></div>
                        <div id="grids">
                            <div className="row">
                                <div className="md:col-2">
                                    <div className="uppercase">col-2</div>
                                </div>
                                <div className="md:col-3 offset-center">
                                    <div className="uppercase">col-3 offset-center</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="md:col-5 offset-1">
                                    <div className="uppercase">col-5 offset-1</div>
                                </div>
                                <div className="md:col-3 offset-left">
                                    <div className="uppercase">col-3 offset-left</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="md:col-5 offset-1">
                                    <div className="uppercase">col-3 offset-1</div>
                                </div>
                                <div className="md:col-4 offset-right offset-6">
                                    <div className="uppercase">col-4 offset-right</div>
                                </div>
                            </div>
                        </div>
                        <table className="table bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <code>offset-left</code>
                                    </td>
                                    <td className="u-text-left">
                                        <CodeBlock
                                            code={`margin-left: auto;
margin-right: 0;`}
                                            language="css"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>offset-center</code>
                                    </td>
                                    <td className="u-text-left">
                                        <CodeBlock
                                            code={`margin-left: auto;
margin-right: auto;`}
                                            language="css"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>offset-right</code>
                                    </td>
                                    <td className="u-text-left">
                                        <CodeBlock
                                            code={`margin-left: 0;
margin-right: auto;`}
                                            language="css"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="row">
    <div class="md:col-2">
        <div class="uppercase">col-2</div>
    </div>
    <div class="md:col-3 offset-center">
        <div class="uppercase">md:col-3 offset-center</div>
    </div>
</div>
<div class="row">
    <div class="md:col-5 offset-1">
        <div class="uppercase">md:col-5 offset-1</div>
    </div>
    <div class="md:col-3 offset-left">
        <div class="uppercase">col-3 offset-left</div>
    </div>
</div>
<div class="row">
    <div class="md:col-5 offset-1">
        <div class="uppercase">col-3 offset-1</div>
    </div>
    <div class="md:col-4 offset-right offset-6">
        <div class="uppercase">col-4 offset-right</div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_LAYOUT,
                        pageName: `Columns`,
                    }}
                />
            </span>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ColumnsPage);
