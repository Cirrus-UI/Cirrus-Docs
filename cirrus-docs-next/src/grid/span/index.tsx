import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { DEFAULT_COLUMN_SIZING_SYSTEM, DEFAULT_ROW_SIZING_SYSTEM, DEFAULT_ROW_START_END_SIZING_SYSTEM, PAGE_TITLE_PREFIX } from '../../../constants';
import Link from 'next/link';
import { TITLE_GRID } from '../../../config/sidebar';
import { ClassTable } from '../../../layouts/components/class-table';
import { PseudoVariant } from '../../../layouts/components/pseudo-variant';
import { PseudoVariantsEnum } from '../../../models/psuedo-variant';
import { VersionTag } from '../../../layouts/components/tag';

export const GridSpanPage: React.FC<any> = (props) => {
    const GRID_COLUMN_CLASS_TABLE = DEFAULT_COLUMN_SIZING_SYSTEM.map((size) => {
        return {
            class: `grid-c-${size}`,
            style: `grid-column: span ${size} / span ${size}`,
        };
    });
    const GRID_ROW_CLASS_TABLE = DEFAULT_ROW_SIZING_SYSTEM.map((size) => {
        return {
            class: `grid-r-${size}`,
            style: `grid-row: span ${size} / span ${size}`,
        };
    });
    const GRID_CS_CLASS_TABLE = DEFAULT_COLUMN_SIZING_SYSTEM.map((size) => {
        return {
            class: `grid-cs-${size}`,
            style: `grid-column-start: ${size+1}`,
        };
    });
    const GRID_CE_CLASS_TABLE = DEFAULT_COLUMN_SIZING_SYSTEM.map((size) => {
        return {
            class: `grid-ce-${size}`,
            style: `grid-column-end: ${size+1}`,
        };
    });
    const GRID_RS_CLASS_TABLE = DEFAULT_ROW_START_END_SIZING_SYSTEM.map((size) => {
        return {
            class: `grid-rs-${size}`,
            style: `grid-row-start: ${size+1}`,
        };
    });
    const GRID_RE_CLASS_TABLE = DEFAULT_ROW_START_END_SIZING_SYSTEM.map((size) => {
        return {
            class: `grid-re-${size}`,
            style: `grid-row-end: ${size+1}`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Grid Span</title>
            </Head>
            <div>
                <section className="padtop" id="span">
                    <div className="content">
                        <Headline title="Grid Span" link="#span" />
                        <div className="divider"></div>
                        <VersionTag version='0.8.0' text='Updated' />

                        <p>
                            These classes are utility classes for determining how elements are located and stretched
                            across the <code>grid</code>.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="spanning-elements">
                    <div className="content">
                        <Headline title="Spanning Elements" link="./spanning-elements" size="4" />
                        <div className="divider"></div>
                        <p>These are utility classes used for specifying how </p>

                        <h6 className="font-alt">Columns</h6>
                        <p>
                            Use <code>grid-c-[1-12]</code> to specify how many columns an element should span.
                        </p>

                        <ClassTable classTable={GRID_COLUMN_CLASS_TABLE} />
                        <PseudoVariant defaultEnabledPseudos={[PseudoVariantsEnum.RESPONSIVE]} />
                        <div className="space space--lg"></div>

                        <div className="grid u-gap-2">
                            <div className="grid-c-1 _grid-ex">
                                <span>1</span>
                            </div>
                            <div className="grid-c-11" />
                            <div className="grid-c-2 _grid-ex">
                                <span>grid-c-2</span>
                            </div>
                            <div className="grid-c-10" />
                            <div className="grid-c-3 _grid-ex">
                                <span>grid-c-3</span>
                            </div>
                            <div className="grid-c-9" />
                            <div className="grid-c-4 _grid-ex">
                                <span>grid-c-4</span>
                            </div>
                            <div className="grid-c-8" />
                            <div className="grid-c-5 _grid-ex">
                                <span>grid-c-5</span>
                            </div>
                            <div className="grid-c-7" />
                            <div className="grid-c-6 _grid-ex">
                                <span>grid-c-6</span>
                            </div>
                            <div className="grid-c-7 _grid-ex">
                                <span>grid-c-7</span>
                            </div>
                            <div className="grid-c-8 _grid-ex">
                                <span>grid-c-8</span>
                            </div>
                            <div className="grid-c-9 _grid-ex">
                                <span>grid-c-9</span>
                            </div>
                            <div className="grid-c-10 _grid-ex">
                                <span>grid-c-10</span>
                            </div>
                            <div className="grid-c-11 _grid-ex">
                                <span>grid-c-11</span>
                            </div>
                            <div className="grid-c-12 _grid-ex">
                                <span>grid-c-12</span>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="grid u-gap-2">
    <div class="grid-c-1"><span>1</span></div>
    <div class="grid-c-11"></div>
    <div class="grid-c-2"><span>grid-c-2</span></div>
    <div class="grid-c-10"></div>
    <div class="grid-c-3"><span>grid-c-3</span></div>
    <div class="grid-c-9"></div>
    <div class="grid-c-4"><span>grid-c-4</span></div>
    <div class="grid-c-8"></div>
    <div class="grid-c-5"><span>grid-c-5</span></div>
    <div class="grid-c-7"></div>
    <div class="grid-c-6"><span>grid-c-6</span></div>
    <div class="grid-c-7"><span>grid-c-7</span></div>
    <div class="grid-c-8"><span>grid-c-8</span></div>
    <div class="grid-c-9"><span>grid-c-9</span></div>
    <div class="grid-c-10"><span>grid-c-10</span></div>
    <div class="grid-c-11"><span>grid-c-11</span></div>
    <div class="grid-c-12"><span>grid-c-12</span></div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <p>
                            Let's use a small example with a <code>grid</code> of 3 columns.
                        </p>

                        <div className="grid grid-cols-3 u-gap-2">
                            <div className="grid-c-2 py-4 bg-indigo-200"></div>
                            <div className="py-4 bg-purple-200"></div>
                            <div className="grid-c-3 py-4 bg-purple-200"></div>
                            <div className="grid-c-1 py-4 bg-indigo-200"></div>
                            <div className="grid-c-1 py-4 bg-purple-200"></div>
                            <div className="grid-c-1 py-4 bg-indigo-200"></div>
                        </div>
                        <div className="space"></div>

                        <CodeBlock
                            code={`<div class="grid grid-cols-3 u-gap-2">
    <div class="grid-c-2 py-4 bg-indigo-200"></div>
    <div class="py-4 bg-purple-200"></div>
    <div class="grid-c-3 py-4 bg-purple-200"></div>
    <div class="grid-c-1 py-4 bg-indigo-200"></div>
    <div class="grid-c-1 py-4 bg-purple-200"></div>
    <div class="grid-c-1 py-4 bg-indigo-200"></div>
</div>`}
                            language="htmlbars"
                        />

                        <div className="space space--lg"></div>

                        <h6 className="font-alt">Rows</h6>
                        <p>
                            Like what is shown above for columns, the same applies for spanning rows -- this time using
                            the <code>grid-r-[1-6]</code> class.
                        </p>

                        <ClassTable classTable={GRID_ROW_CLASS_TABLE} />
                        <PseudoVariant defaultEnabledPseudos={[PseudoVariantsEnum.RESPONSIVE]} />
                        <div className="space space--lg"></div>

                        <div
                            className="grid grid-cols-6 u-gap-2"
                            style={{
                                height: '500px',
                            }}
                        >
                            <div className="grid-r-1 _grid-ex u-text-center">
                                <span>grid-r-1</span>
                            </div>
                            <div className="grid-r-2 _grid-ex u-text-center">
                                <span>grid-r-2</span>
                            </div>
                            <div className="grid-r-3 _grid-ex u-text-center">
                                <span>grid-r-3</span>
                            </div>
                            <div className="grid-r-4 _grid-ex u-text-center">
                                <span>grid-r-4</span>
                            </div>
                            <div className="grid-r-5 _grid-ex u-text-center">
                                <span>grid-r-5</span>
                            </div>
                            <div className="grid-r-6 _grid-ex u-text-center">
                                <span>grid-r-6</span>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="grid grid-cols-6 u-gap-2" style="height: 500px;">
    <div class="grid-r-1"><span>grid-r-1</span></div>
    <div class="grid-r-2"><span>grid-r-2</span></div>
    <div class="grid-r-3"><span>grid-r-3</span></div>
    <div class="grid-r-4"><span>grid-r-4</span></div>
    <div class="grid-r-5"><span>grid-r-5</span></div>
    <div class="grid-r-6"><span>grid-r-6</span></div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="start-end">
                    <div className="content">
                        <Headline title="Start / End" link="#start-end" size="4" />
                        <div className="divider"></div>

                        <p>
                            For greater control, you can explicitly specify the start and end for either a row or
                            column.
                        </p>
                        <div className="space"></div>

                        <h6 className="font-alt">Columns</h6>
                        <p>
                            To specify the starting column position for an element, use the <code>grid-cs-[1-12]</code>{' '}
                            class. The <i>cs</i> stands for <i>column start</i>.
                        </p>
                        <ClassTable classTable={GRID_CS_CLASS_TABLE} />
                        <PseudoVariant defaultEnabledPseudos={[PseudoVariantsEnum.RESPONSIVE]} />
                        <div className="space space--xl"></div>

                        <p>
                            To specify the ending column position for an element, use the <code>grid-ce-[1-12]</code>{' '}
                            class. The <i>ce</i> stands for <i>column end</i>.
                        </p>
                        <ClassTable classTable={GRID_CE_CLASS_TABLE} />
                        <PseudoVariant defaultEnabledPseudos={[PseudoVariantsEnum.RESPONSIVE]} />

                        <div className="space space--xl"></div>

                        <div className="grid u-gap-2">
                            <div className="grid-cs-2 grid-ce-7 _grid-ex">2-7</div>
                            <div className="grid-cs-1 grid-ce-4 _grid-ex">1-4</div>
                            <div className="grid-c-5" />
                            <div className="grid-cs-6 grid-ce-end _grid-ex">6 - end</div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="grid u-gap-2">
    <div class="grid-cs-2 grid-ce-7">2-7</div>
    <div class="grid-cs-1 grid-ce-4">1-4</div>
    <div class="grid-c-5"></div>
    <div class="grid-cs-6 grid-ce-end">6 - end</div>
</div>`}
                            language="htmlbars"
                        />

                        <p>In addition to these classes, there are also additional helper classes.</p>
                        <table className="table bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <code>grid-ce-end</code>
                                    </td>
                                    <td>Extends grid element to take up remaining width.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>grid-ce-auto</code>
                                    </td>
                                    <td>Auto adjusts element width span.</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="space space--lg"></div>

                        <h6 className="font-alt">Rows</h6>
                        <p>
                            To specify the starting row position for an element, use the <code>grid-rs-[1-4]</code>{' '}
                            class. The <i>rs</i> stands for <i>row start</i>.
                        </p>
                        <ClassTable classTable={GRID_RS_CLASS_TABLE} />
                        <PseudoVariant defaultEnabledPseudos={[PseudoVariantsEnum.RESPONSIVE]} />
                        <div className="space space--xl"></div>
                        <p>
                            To specify the ending row position for an element, use the <code>grid-re-[1-4]</code> class.
                            The <i>re</i> stands for <i>row end</i>.
                        </p>
                        <ClassTable classTable={GRID_RE_CLASS_TABLE} />
                        <PseudoVariant defaultEnabledPseudos={[PseudoVariantsEnum.RESPONSIVE]} />
                        <div className="space space--xl"></div>
                        <div className="grid grid-cols-5 grid-rows-4 u-gap-2">
                            <div className="grid-rs-1 grid-re-4 _grid-ex">1-4</div>
                            <div className="grid-rs-2 grid-re-4 _grid-ex">2-4</div>
                            <div className="grid-rs-3 grid-re-4 _grid-ex">3-4</div>
                            <div className="grid-rs-4 grid-re-4 _grid-ex">4-4</div>
                            <div className="grid-rs-1 grid-re-2 _grid-ex">1-2</div>
                            <div className="grid-rs-1 grid-re-3 _grid-ex">1-3</div>
                            <div className="grid-rs-2 grid-re-3 _grid-ex">2-3</div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="grid grid-cols-5 grid-rows-4 u-gap-2">
    <div class="grid-rs-1 grid-re-4 _grid-ex">1-4</div>
    <div class="grid-rs-2 grid-re-4 _grid-ex">2-4</div>
    <div class="grid-rs-3 grid-re-4 _grid-ex">3-4</div>
    <div class="grid-rs-4 grid-re-4 _grid-ex">4-4</div>
    <div class="grid-rs-1 grid-re-2 _grid-ex">1-2</div>
    <div class="grid-rs-1 grid-re-3 _grid-ex">1-3</div>
    <div class="grid-rs-2 grid-re-3 _grid-ex">2-3</div>
</div>
`}
                            language="htmlbars"
                        />

                        <p>In addition to these classes, there are also additional helper classes.</p>
                        <table className="table bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <code>grid-re-end</code>
                                    </td>
                                    <td>Extends grid element to take up remaining height.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>grid-re-auto</code>
                                    </td>
                                    <td>Auto adjusts element height span.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="padtop" id="variants">
                    <div className="content">
                        <Headline title="Variants" link="#variants" size="4" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">Updated</div>
                            <div className="tag tag--info">0.7.0</div>
                        </span>
                        <p>
                            By default, <code>grid</code> is preset with 12 individual columns horizontally with a
                            variable amount of rows. This value can be changed in the framework as well by modifying the
                            grid count inside <code>_config.scss</code>.
                        </p>
                        <p>
                            To learn more about how to configure what clases are generated for grid spans, refer to the{' '}
                            <Link href="/grid/templates#variants">
                                <a className="u u-LR">Grid Variants</a>
                            </Link>{' '}
                            docs.
                        </p>
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_GRID,
                        pageName: `Span`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(GridSpanPage);
